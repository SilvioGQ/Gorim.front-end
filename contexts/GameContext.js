import React, { useState, useEffect, useReducer } from 'react';
import io from 'socket.io-client';
import { API_URL_HERO, API_URL_LOCAL } from '@env';
import { initialState, reducer } from '../reducers/customers';
import { schedulePushNotification } from '../helpers/schedulePushNotification';
import { Platform } from 'react-native';
import ModalAsk from '../Components/ModalAsk';

const socket = io(API_URL_HERO, {
  autoConnect: false
});
const GameContext = React.createContext();
const GameProvider = (props) => {
  const [startTimer, setStartTimer] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [openModal, setOpenModal] = useState(false);

  const disableNotifyScene = () => { 
    dispatch({ type: 'GETNOTIFY', payload: { scene: false } });
  };

  const disableNotifyOffers = () => {
    dispatch({ type: 'GETNOTIFY', payload: { offers: false } });
  };

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
      // removedToRoom, maxPlayersToRoom, inGaming, raffled, notFound, selectedAvatars, endStage, allForEndStage, reconnected
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
      if (obj.forAll) {
        dispatch({ type: 'GETOFFERSFORALL', payload: obj.offers });
      } else {
        dispatch({ type: 'GETOFFERINDIVIDUAL', payload: obj.offers });
      }
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
    socket.on('endStage', (round) =>{
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
    socket.on('nextRound', (room) => {
      disableNotifyScene();
      disableNotifyOffers();
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
    let interval = setInterval(() => {
      if (state.timer > 0 && startTimer) {
        dispatch({ type: 'UPDATETIMER', payload: state.timer - 1});
      } else if (startTimer) {
        setStartTimer(false);
        endStage();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [state.timer, startTimer]);

  return (
    <GameContext.Provider value={{ ...state, disableNotifyScene, disableNotifyOffers, setStartTimer}}>
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
  if (name) {
    socket.emit('getProducts', name);
  } else {
    socket.emit('getProducts');
  }
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

const nextRound = () =>{
  socket.emit('nextRound');
}

const reconnectToRoom = (player) => {
  socket.emit('reconnectToRoom', player);
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
  nextRound,
  reconnectToRoom
};