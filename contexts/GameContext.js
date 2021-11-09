import React, { useState, useEffect, useReducer, useCallback, useRef } from 'react';
import io from 'socket.io-client';
import { API_URL_HERO, API_URL_LOCAL } from '@env';
import { initialState, reducer } from '../reducers/customers';
import { schedulePushNotification } from '../helpers/schedulePushNotification';
import { Platform } from 'react-native';
import ModalInfo from '../Components/ModalInfo';
import { recordStartTime, recordGetTime } from '../helpers/recordTimer';

const socket = io(API_URL_HERO, { autoConnect: false });
const GameContext = React.createContext();
const GameProvider = (props) => {

  const [state, dispatch] = useReducer(reducer, initialState);
  const [modal, setModal] = useState(false);
  const refContainer = useRef();
  
  const callbackForTimer = useCallback(event => {
    switch (true) {
      case event === 'ENDSTAGE':
        endStage();
      break;
      case event === 'NEXTSTAGE':
        nextStage();
      break;
      case event === 'ENDROUND':
        endRound();
      break;
      default:
        refContainer.current();
      break;
    }
  });

  const disableNotifyScene = () => {
    dispatch({ type: 'GETNOTIFY', payload: { scene: false } });
  };

  const disableNotifyOffers = () => {
    dispatch({ type: 'GETNOTIFY', payload: { offers: false } });
  };

  const startTimer = (maxTime, callback) => {
    refContainer.current = callback;

    dispatch({ type: 'UPDATETIMER', payload: maxTime });
    recordStartTime(maxTime, socket.id).then(() => {
      let interval = setInterval(() => {
        recordGetTime(socket.id).then(timer => {
          dispatch({ type: 'UPDATETIMER', payload: timer });
          if (timer === 0) {
            callbackForTimer(refContainer.current);
            clearInterval(interval);
          }
        });
      }, 1000);
    });
  }

  const stopCallback = () => {
    refContainer.current = 'NOTHING';
  }

  useEffect(() => {
    let isConnected = null;
    let player = {};

    socket.on('connect', () => {
      if (isConnected === null) {
        console.log('Connected!');
      } else {
        if (Platform.OS !== "web") schedulePushNotification('RECONNECTED');
        reconnectToRoom(player);
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
      // removedToRoom, maxPlayersToRoom, inGaming, raffled, notFound, selectedAvatars, endStage, allForEndStage
      dispatch({ type: msg.toUpperCase(), payload: msg.toUpperCase() });
      if (msg === 'selectedAvatars') startTimer(400, 'ENDSTAGE');
    });
    socket.on('getProducts', (product) => {
      dispatch({ type: 'CHANGEDATA', payload: ['GETPRODUCTS', product] });
    });
    socket.on('calcPlayerTax', (tax) => {
      dispatch({ type: 'CHANGEDATA', payload: ['CALCPLAYERTAX', tax] });
    });
    socket.on('getLogs', (logs) => {
      dispatch({ type: 'GETLOGS', payload: logs });
    });
    socket.on('getOffers', (obj) => {
      dispatch({ type: obj.forAll ? 'GETOFFERSFORALL' : 'GETOFFERINDIVIDUAL', payload: obj.offers });
    });
    socket.on('getCityTax', (tax) => {
      dispatch({ type: 'CHANGEDATA', payload: ['GETCITYTAX', tax] });
    });
    socket.on('getSuggests', (suggests) => {
      dispatch({ type: 'GETSUGGESTS', payload: suggests });
    });
    socket.on('suggestFine', (suggest) => {
      dispatch({ type: 'CHANGEDATA', payload: ['SUGGESTFINE', suggest] });
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
      dispatch({ type: 'CHANGEDATA', payload: ['ENDSTAGE', round] });
      startTimer(5, 'NEXTSTAGE');
    });
    socket.on('updateAwaitPlayers', (awaitPlayers) => {
      dispatch({ type: 'UPDATEAWAITPLAYERS', payload: awaitPlayers });
    });
    socket.on('updatePhase', (phase) => {
      dispatch({ type: 'UPDATEPHASE', payload: phase });
    });
    socket.on('updateGlobalPollution', (pollution) => {
      dispatch({ type: 'UPDATEGLOBALPOLLUTION', payload: pollution });
    });
    socket.on('updateGlobalProduction', (production) => {
      dispatch({ type: 'UPDATEGLOBALPRODUCTION', payload: production });
    });
    socket.on('nextStage', (room) => {
      dispatch({ type: 'NEXTSTAGE', payload: ['NEXTSTAGE', room] });
      startTimer(400, 'ENDROUND');
    });
    socket.on('endRound', () => {
      dispatch({ type: 'ENDROUND', payload: 'ENDROUND' });
    });
    socket.on('nextRound', (room) => {
      console.log(room)
      dispatch({ type: 'NEXTROUND', payload: ['NEXTROUND', room] });
      startTimer(400, 'ENDSTAGE');
    });
    socket.on('reconnectToRoom', (stage) => {
      dispatch({ type: 'RECONNECTED', payload: stage });
    });
    socket.on('disconnect', () => {
      if (Platform.OS !== "web") schedulePushNotification('DISCONNECTED');
      console.log('Disconnected!');
      setModal(true);
      isConnected = false;
    });

    socket.open();
  }, []);

  return (
    <GameContext.Provider value={{ ...state, disableNotifyScene, disableNotifyOffers, stopCallback, startTimer }}>
      {modal && (
        <ModalInfo onClick={() => { setModal(false) }} display={socket.connected ? 'flex' : 'none'} text={'Estamos reconectando você para partida'} />
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

const makeTransfer = (count, idDest, coin, coinSalary) => {
  socket.emit('makeTransfer', count, idDest, coin, coinSalary);
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

const calcPlayerTax = () => {
  socket.emit('calcPlayerTax');
}

const nextStage = () => {
  socket.emit('nextStage');
}

const reconnectToRoom = (player) => {
  socket.emit('reconnectToRoom', player);
}

const suggestFine = () => {
  socket.emit('suggestFine');
}

const requestStamp = (parcelLand) => {
  socket.emit('requestStamp', parcelLand);
}

const sendFine = (playerId, gravity) => {
  socket.emit('sendFine', playerId, gravity);
}

const sendStamp = (playerId, parcelLands) => {
  socket.emit('sendStamp', playerId, parcelLands);
}

const applyPrevention = (prevention) => {
  socket.emit('applyPrevention', prevention);
}

const applyTax = (newTax) => {
  socket.emit('applyTax', newTax);
}

const applyDefaultTax = () => {
  socket.emit('applyDefaultTax');
}

const getCityTax = () => {
  socket.emit('getCityTax');
}

const suggestTax = (suggest) => {
  socket.emit('suggestTax', suggest);
}

const suggestPrevention = (suggest) => {
  socket.emit('suggestPrevention', suggest);
}
const deleteSuggest = (suggest) => {
  socket.emit('deleteSuggest', suggest);
}
const toggleApprovedSuggest = (suggest, status) => {
  socket.emit('toggleApprovedSuggest', suggest, status);
}
const endRound = () => {
  socket.emit('endRound');
}

const nextRound = () => {
  socket.emit('nextRound');
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
  calcPlayerTax,
  endStage,
  nextStage,
  reconnectToRoom,
  suggestFine,
  requestStamp,
  sendFine,
  sendStamp,
  applyPrevention,
  applyTax,
  applyDefaultTax,
  getCityTax,
  suggestTax,
  suggestPrevention,
  deleteSuggest,
  toggleApprovedSuggest,
  endRound,
  nextRound
};