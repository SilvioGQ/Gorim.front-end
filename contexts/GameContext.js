import React, { useState, useEffect, useReducer, useCallback, useRef } from 'react';
import io from 'socket.io-client';
import { API_URL_HERO, API_URL_LOCAL } from '@env';
import { initialState, reducer } from '../reducers/customers';
import { schedulePushNotification } from '../helpers/schedulePushNotification';
import { Platform } from 'react-native';
import ModalAsk from '../Components/ModalAsk';
import { recordStartTime, recordGetTime } from '../helpers/recordTimer';

const socket = io(API_URL_LOCAL, { autoConnect: false });
const GameContext = React.createContext();
const GameProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [openModal, setOpenModal] = useState(false);
  const [startTimer, setStartTimer] = useState(false);
  const callbackForTimer = useCallback(event => {
    if (event === 'ENDSTAGE') endStage();
    if (event === 'NEXTSTAGE') nextStage();
  });
  const refContainer = useRef();

  const disableNotifyScene = () => { 
    dispatch({ type: 'GETNOTIFY', payload: { scene: false } });
  };

  const disableNotifyOffers = () => {
    dispatch({ type: 'GETNOTIFY', payload: { offers: false } });
  };

  const startTime = (maxTime, callback) => {
    recordStartTime(maxTime);
    setStartTimer(true);
    refContainer.current = callback;
  }

  useEffect(() => {
    let isConnected = null;
    let player = {};

    socket.on('connect', () => {
      if (isConnected === null) {
        console.log('Connected!');
      } else {
        if (Platform.OS !== "web") schedulePushNotification('RECONNECTED');
        console.log('Reconnected!');
      }
      isConnected = true;
    });
    socket.on('refreshPlayers', (players) => {
      dispatch({ type: 'REFRESHPLAYERS', payload: players });
    });
    socket.on('updatePlayer', (p) => {
      player = p;
      dispatch({ type: 'UPDATEPLAYER', payload: p });
    });
    socket.on('startGame', (room) => {
      dispatch({ type: 'STARTGAME', payload: ['STARTGAME', room] });
    });
    socket.on('addedToRoom', (p) => {
      player = p;
      dispatch({ type: 'ADDEDTOROOM', payload: ['ADDEDTOROOM', p] });
    });
    socket.on('reportMessage', (msg) => {
      // removedToRoom, maxPlayersToRoom, inGaming, raffled, notFound, selectedAvatars, allForEndStage
      if (msg === 'selectedAvatars') startTime(15, 'ENDSTAGE');
      dispatch({ type: msg.toUpperCase(), payload: msg.toUpperCase() });
    });
    socket.on('getProducts', (product) => {
      dispatch({ type: 'CHANGEDATA', payload: ['GETPRODUCTS', product] });
    });
    socket.on('getTax', (tax) => {
      dispatch({ type: 'CHANGEDATA', payload: ['GETTAX', tax] });
    });
    socket.on('getLogs', (logs) => {
      dispatch({ type: 'GETLOGS', payload: logs });
    });
    socket.on('getOffers', (obj) => {
      dispatch({ type: obj.forAll ? 'GETOFFERSFORALL' : 'GETOFFERINDIVIDUAL', payload: obj.offers });
    });
    socket.on('suggestTax', (suggest) => {
      dispatch({ type: 'CHANGEDATA', payload: ['SUGGESTTAX', suggest] });
    });
    socket.on('enableNotifyScene', () => {
      dispatch({ type: 'GETNOTIFY', payload: { scene: true } });
    });
    socket.on('enableNotifyOffers', () => {
      dispatch({ type: 'GETNOTIFY', payload: { offers: true } });
    });
    // socket.on('disableNotifyOffers', () => {
    //   dispatch({ type: 'GETNOTIFY', payload: { offers: false } });
    // });
    socket.on('endStage', (round) => {
      startTime(15, 'NEXTSTAGE');
      dispatch({ type: 'CHANGEDATA', payload: ['ENDSTAGE', round]})
    });
    socket.on('updateAwaitPlayers', (awaitPlayers) => {
      dispatch({ type: 'UPDATEAWAITPLAYERS', payload: awaitPlayers });
    });
    socket.on('updateGlobalPollution', (pollution) => {
      dispatch({ type: 'UPDATEGLOBALPOLLUTION', payload: pollution });
    });
    socket.on('updateGlobalProduction', (production) => {
      dispatch({ type: 'UPDATEGLOBALPRODUCTION', payload: production });
    });
    socket.on('nextStage', (room) => {
      startTime(15, 'ENDROUND');
      dispatch({ type: 'NEXTROUND', payload: ['NEXTROUND', room] });
    });
    socket.on('reconnectToRoom', (stage) => {
      setOpenModal(false);
      dispatch({ type: 'RECONNECTED', payload: stage });
    });
    socket.on('disconnect', () => {
      if (Platform.OS !== "web") schedulePushNotification('DISCONNECTED');
      if (player.room) setOpenModal(true);
      console.log('Disconnected!');
      isConnected = false;
    });

    socket.open();
  }, []);

  useEffect(() => {
    let timer, interval = setInterval(async () => {
      timer = await recordGetTime();
      if (timer === 0 && startTimer) {
        setStartTimer(false);
        callbackForTimer(refContainer.current);
        dispatch({ type: 'UPDATETIMER', payload: 0 });
      } else if (startTimer) {
        dispatch({ type: 'UPDATETIMER', payload: timer });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [state.timer, startTimer]);

  return (
    <GameContext.Provider value={{ ...state, disableNotifyScene, disableNotifyOffers, setStartTimer, startTime}}>
      {openModal  && (
        <ModalAsk finish={() => { if (socket.connected) reconnectToRoom(state.player) }} opacity={socket.connected ? 1 : 0.5} back={()=>{}} text={'Você foi desconectado, deseja voltar para partida?'} />
      )}
      {props.children}
    </GameContext.Provider>
  );
}

const addToRoom = (name) => {
  socket.emit('addToRoom', name);
}

const joinToRoom = (name, roomId) => {
  socket.emit('joinToRoom', name, roomId);
}

const removeToRoom = () => {
  socket.emit('removeFromRoom');
}

const startGame = () => {
  socket.emit('startGame');
}

const makeRaffle = () => {
  socket.emit('makeRaffle');
}

const selectAvatar = (avatar) => {
  socket.emit('selectAvatar', avatar);
}

const selectedAvatars = () => {
  socket.emit('selectedAvatars');
}

const toPlant = (parcelLand) => {
  socket.emit('toPlant', parcelLand);
}

const addSprayParcel = (parcelLand) => {
  socket.emit('addSprayParcel', parcelLand);
}

const makeTransfer = (count, idDest) => {
  socket.emit('makeTransfer', count, idDest);
}

const getProducts = (name = null) => {
  socket.emit('getProducts', name);
}

const addAdvert = (name, specialty, price, client, amount, priceType) => {
  socket.emit('addAdvert', name, specialty, price, client, amount, priceType);
}

const deleteAdvert = (id) => {
  socket.emit('deleteAdvert', id);
}

const confirmOffer = (item, amount = null) => {
  socket.emit('confirmOffer', item, amount);
}

const rejectOffer = (item) => {
  socket.emit('rejectOffer', item);
}

const endStage = () => {
  socket.emit('endStage');
}

const getTax = () => {
  socket.emit('getTax');
}

const nextStage = () =>{
  socket.emit('nextStage');
}

const reconnectToRoom = (player) => {
  socket.emit('reconnectToRoom', player);
}
const suggestTax = () =>{
  socket.emit('suggestTax');
}

export {
  GameContext,
  GameProvider,
  addToRoom,
  joinToRoom,
  removeToRoom,
  startGame,
  makeRaffle,
  selectAvatar,
  selectedAvatars,
  toPlant,
  addSprayParcel,
  makeTransfer,
  getProducts,
  addAdvert,
  deleteAdvert,
  confirmOffer,
  rejectOffer,
  getTax,
  endStage,
  nextStage,
  reconnectToRoom,
  suggestTax
};