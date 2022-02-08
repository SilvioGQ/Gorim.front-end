import React, { useEffect, useReducer } from 'react';
import io from 'socket.io-client';
import { API_URL_HERO, API_URL_LOCAL } from '@env';
import { initialState, reducer } from '../reducers/customers';
import { schedulePushNotification } from '../helpers/schedulePushNotification';
import { Platform } from 'react-native';
// import ModalInfo from '../Components/ModalInfo';
import { recordStartTime, recordGetTime } from '../helpers/recordTimer';

const socket = io(API_URL_HERO, { autoConnect: false });
const GameContext = React.createContext();
const GameProvider = (props) => {

  const [state, dispatch] = useReducer(reducer, initialState);
  // const [modal, setModal] = useState(false);

  const disableNotifyScene = () => {
    dispatch({ type: 'GETNOTIFY', payload: { scene: false } });
  };

  const disableNotifyOffers = () => {
    dispatch({ type: 'GETNOTIFY', payload: { offers: false } });
  };

  const disableNotifySuggests = () => {
    dispatch({ type: 'GETNOTIFY', payload: { suggests: false } });
  };
  
  const startTimer = (maxTime, callback) => {
    let callbackUsed = false;
    
    dispatch({ type: 'UPDATETIMER', payload: maxTime });
    recordStartTime(maxTime, socket.id).then(startTime => {
      let interval = setInterval(() => {
        
        recordGetTime(startTime, socket.id).then(timer => {
          if (timer === undefined) {
            clearInterval(interval);
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
    // let isConnected = null;
    // let player = {};

    socket.on('connect', () => {
      // if (isConnected === null) {
      console.log('Connected!');
      // } else {
      //   if (Platform.OS !== "web") schedulePushNotification('RECONNECTED');
      //   reconnectToRoom(player);
      //   console.log('Reconnected!');
      // }
      // isConnected = true;
    });

    socket.on('refreshPlayers', (players) => {
      dispatch({ type: 'REFRESHPLAYERS', payload: players });
    });

    socket.on('updatePlayer', (p) => {
      // player = p;
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

    socket.on('addedToRoom', (player) => {
      // player = p;
      console.log(player.room)
      dispatch({ type: 'ADDEDTOROOM', payload: ['ADDEDTOROOM', player] });
    });

    socket.on('reportMessage', (msg) => {
      // removedToRoom, maxPlayersToRoom, inGaming, raffled, notFound, selectedAvatars, allForEndStage, allForEndRound, initElections
      dispatch({ type: msg.toUpperCase(), payload: msg.toUpperCase() });
      if (msg === 'selectedAvatars') startTimer(400, () => endStage());
      if (msg === 'INITELECTIONS') startTimer(20, () => addCandidature(null));
      if (msg === 'INITVOTATION') startTimer(20, () => addVote({ mayor: '', cityCouncilor: '', supervisor: '' }));
      if (msg === 'INITRESULTSVOTATION') startTimer(20, () => nextStage());
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

    socket.on('endStage', (round) => {
      dispatch({ type: 'CHANGEDATA', payload: ['ENDSTAGE', round] });
      startTimer(20, () => nextStage());
    });

    socket.on('endRound', (round) => {
      dispatch({ type: 'CHANGEDATA', payload: ['ENDROUND', round] });
      startTimer(20, () => nextRound());
    });

    socket.on('nextStage', () => {
      dispatch({ type: 'NEXTSTAGE', payload: 'NEXTSTAGE' });
      startTimer(400, () => endRound());
    });

    socket.on('nextRound', () => {
      dispatch({ type: 'NEXTROUND', payload: 'NEXTROUND' });
      startTimer(400, () => endStage());
    });

    // socket.on('reconnectToRoom', (stage) => {
    //   dispatch({ type: 'RECONNECTED', payload: stage });
    // });
    socket.on('disconnect', () => {
      if (Platform.OS !== "web") schedulePushNotification('DISCONNECTED');
      console.log('Disconnected!');
      // setModal(true);
      // isConnected = false;
    });

    socket.open();
  }, []);

  return (
    <GameContext.Provider value={{ ...state, disableNotifyScene, disableNotifyOffers, disableNotifySuggests }}>
      {/* {modal && (
        <ModalInfo player={state.player} onClick={() => { setModal(false) }} display={socket.connected ? 'flex' : 'none'} text={'Estamos reconectando você para partida'} />
      )} */}
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
  getPlayersOffice
};