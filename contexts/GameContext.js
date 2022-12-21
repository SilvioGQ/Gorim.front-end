import React, { useState, useEffect, useReducer } from 'react';
import io from 'socket.io-client';
import {  API_URL_LOCAL } from '@env';
import { initialState, reducer } from '../reducers/customers';
import { schedulePushNotification } from '../helpers/schedulePushNotification';
import { Platform, Dimensions, Text, View } from 'react-native';
import WaitingRecconection from '../components/WaitingRecconection';
import { recordStartTime, recordGetTime, freezeTimer, restartTimer, changeStatusTimer } from '../helpers/recordTimer';
import * as Navigation from '../helpers/navigation';

const socket = io('https://gorim-backend.onrender.com', { autoConnect: false });
const GameContext = React.createContext();
const GameProvider = (props) => {

  const [state, dispatch] = useReducer(reducer, initialState);
  const [modal, setModal] = useState(false);

  const disableNotifyScene = () => {
    dispatch({ type: 'GETNOTIFY', payload: { scene: false } });
  };

  const disableNotifyOffers = () => {
    dispatch({ type: 'GETNOTIFY', payload: { offers: false } });
  };

  const disableNotifySuggests = () => {
    dispatch({ type: 'GETNOTIFY', payload: { suggests: false } });
  };

  const disableNotifyMessage = (id) => {
    dispatch({ type: 'GETNOTIFYMESSAGE', payload: { sender: id, action: 'disable' } });
  };

  const startTimer = (maxTime, callback, startTimeRecovery = null, status = null) => {
    let callbackUsed = false;

    dispatch({ type: 'UPDATETIMER', payload: maxTime });
    recordStartTime(maxTime, socket.id, startTimeRecovery, status).then(startTime => {
      let interval = setInterval(() => {

        recordGetTime(startTime, socket.id).then(timer => {
          if (timer === undefined) {
            clearInterval(interval);
          } if (timer === "stop") {
            return;
          } else {
            dispatch({ type: 'UPDATETIMER', payload: timer });
          }

          if (timer === 0 && !callbackUsed) {
            callback();
            callbackUsed = true;
            clearInterval(interval);
          }
        });
      }, 1000);
    });
  }

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected!');
    });

    socket.on('refreshPlayers', (players) => {
      dispatch({ type: 'REFRESHPLAYERS', payload: players });
    });

    socket.on('updatePlayer', (p) => {
      dispatch({ type: 'UPDATEPLAYER', payload: p });
    });

    socket.on('updateAwaitPlayers', (awaitPlayers) => {
      dispatch({ type: 'UPDATEAWAITPLAYERS', payload: awaitPlayers });
    });

    socket.on('updateGame', (game) => {
      dispatch({ type: 'UPDATEGAME', payload: game });
    });

    socket.on('startGame', () => {
      dispatch({ type: 'STARTGAME', payload: 'STARTGAME' });
    });

    socket.on('addedToRoom', (player, syncPlayer) => {
      console.log(player.room)
      if (syncPlayer) {
        dispatch({ type: 'UPDATEPLAYER', payload: player });
      } else {
        dispatch({ type: 'ADDEDTOROOM', payload: ['ADDEDTOROOM', player] });
      }
    });

    socket.on('selectedAvatars', (timer) => {
      startTimer(400, () => endStage(), timer);
      roomEndTimer('endStage()');

      dispatch({ type: 'SELECTEDAVATARS', payload: 'SELECTEDAVATARS' });
    });

    socket.on('initElections', (timer) => {
      startTimer(20, () => addCandidature(null), timer);
      roomEndTimer('addCandidature(null)');

      dispatch({ type: 'INITELECTIONS', payload: 'INITELECTIONS' });
    });

    socket.on('initVotation', (timer) => {
      startTimer(20, () => addVote({ mayor: '', cityCouncilor: '', supervisor: '' }), timer);
      roomEndTimer('addVote({ mayor: "", cityCouncilor: "", supervisor: "" })');

      dispatch({ type: 'INITVOTATION', payload: 'INITVOTATION' });
    });

    socket.on('initResultsVotation', (timer) => {
      startTimer(20, () => nextStage(), timer);
      roomEndTimer('nextStage()');

      dispatch({ type: 'INITRESULTSVOTATION', payload: 'INITRESULTSVOTATION' });
    });

    socket.on('reportMessage', (msg) => {
      // removedToRoom, maxPlayersToRoom, inGaming, raffled, notFound, allForEndStage, allForEndRound
      dispatch({ type: msg.toUpperCase(), payload: msg.toUpperCase() });

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
    socket.on('getPlayers', (players) => {
      dispatch({ type: 'CHANGEDATA', payload: ['GETPLAYERS', players] });
    });
    socket.on('getPreventions', (preventions) => {
      dispatch({ type: 'CHANGEDATA', payload: ['GETPREVENTIONS', preventions] });
    });
    socket.on('getElections', (elections) => {
      dispatch({ type: 'CHANGEDATA', payload: ['GETELECTIONS', elections] });
    });
    socket.on('suggestFine', (suggest) => {
      dispatch({ type: 'CHANGEDATA', payload: ['SUGGESTFINE', suggest] });
    });
    socket.on('winnersElection', (winners) => {
      dispatch({ type: 'CHANGEDATA', payload: ['WINNERSELECTION', winners] });
    });
    socket.on('enableNotifyScene', () => {
      dispatch({ type: 'GETNOTIFY', payload: { scene: true } });
    });
    socket.on('enableNotifyOffers', () => {
      dispatch({ type: 'GETNOTIFY', payload: { offers: true } });
    });
    socket.on('enableNotifySuggests', () => {
      dispatch({ type: 'GETNOTIFY', payload: { suggests: true } });
    });
    socket.on('enableNotifyMessage', (id) => {
      dispatch({ type: 'GETNOTIFYMESSAGE', payload: { sender: id, action: 'enable' } });
    });

    socket.on('endStage', (round, timer) => {
      dispatch({ type: 'CHANGEDATA', payload: ['ENDSTAGE', round] });
      startTimer(20, () => nextStage(), timer);
      roomEndTimer('nextStage()');
    });

    socket.on('endRound', (round, timer) => {
      dispatch({ type: 'CHANGEDATA', payload: ['ENDROUND', round] });
      startTimer(20, () => nextRound(), timer);
      roomEndTimer('nextRound()');
    });

    socket.on('nextStage', (timer) => {
      dispatch({ type: 'NEXTSTAGE', payload: 'NEXTSTAGE' });
      startTimer(400, () => endRound(), timer);
      roomEndTimer('endRound()');
    });

    socket.on('nextRound', (timer) => {
      dispatch({ type: 'NEXTROUND', payload: 'NEXTROUND' });
      startTimer(400, () => endStage(), timer);
      roomEndTimer('endStage()');
    });

    socket.on('getMessages', (messages) => {
      dispatch({ type: 'GETMESSAGES', payload: messages });
    });
    
    socket.on('disconnectPlayer', () => {
      freezeTimer(socket.id);
      setModal(true);
    });

    socket.on('reconnectPlayer', () => {
      restartTimer(socket.id).then(res => {
        roomReport(res, Navigation.currentScreen());
      });
    });
    
    socket.on('roomReport', (infoTimer, currentScreen, callback) => {
      startTimer(infoTimer.maxTime, () => eval(callback), infoTimer.startTime, true);
      Navigation.navigate(currentScreen);
      setModal(true);
    });
    
    socket.on('changeStatusTimer', (maxTime) => {
      changeStatusTimer(socket.id, maxTime).then(() => {
        setModal(false);
      });
    });

    socket.on('disconnect', () => {
      if (Platform.OS !== "web") schedulePushNotification('DISCONNECTED');
      console.log('Disconnected!');
    });

    socket.open();
  }, []);
  return (
    <GameContext.Provider value={{ ...state, disableNotifyScene, disableNotifyOffers, disableNotifySuggests, disableNotifyMessage }}>
      {modal && (<WaitingRecconection exit={() => {removeToRoom(); setModal(false)}}/>)}
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

const deleteAdvert = (offer) => {
  socket.emit('deleteAdvert', offer);
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

const getPreventions = () => {
  socket.emit('getPreventions');
}

const addCandidature = (candidature) => {
  socket.emit('addCandidature', candidature);
}

const addVote = (votes) => {
  socket.emit('addVote', votes);
}

const winnersElection = () => {
  socket.emit('winnersElection');
}

const getPlayersOffice = () => {
  socket.emit('getPlayersOffice');
}

const getPlayers = () => {
  socket.emit('getPlayers');
}

const getMessages = () => {
  socket.emit('getMessages');
}

const sendMessage = (id, msg) => {
  socket.emit('sendMessage', id, msg);
}

const sendGroupMessage = (id, msg) => {
  socket.emit('sendGroupMessage', id, msg);
}

const roomReport = (infoTimer, currentScreen) => {
  socket.emit('roomReport', infoTimer, currentScreen);
}

const roomEndTimer = (callback) => {
  socket.emit('roomEndTimer', callback);
}

export {
  GameContext,
  GameProvider,
  addToRoom,
  joinToRoom,
  removeToRoom,
  startGame,
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
  getCityTax,
  suggestTax,
  suggestPrevention,
  deleteSuggest,
  toggleApprovedSuggest,
  endRound,
  nextRound,
  getPreventions,
  addCandidature,
  addVote,
  winnersElection,
  getPlayers,
  getPlayersOffice,
  getMessages,
  sendMessage,
  sendGroupMessage
};
