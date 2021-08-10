import React, { useState, useEffect, useReducer } from 'react';
import io from 'socket.io-client';
import { API_URL_HERO, API_URL_LOCAL } from '@env';
import { initialState, reducer } from '../reducers/customers';

const socket = io(API_URL_LOCAL, {
  autoConnect: false
});

const GameContext = React.createContext();

const GameProvider = (props) => {
  const [startTimer, setStartTimer] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  const disableNotifyScene = () => { 
    dispatch({ type: 'GETNOTIFY', payload: { scene: false } });
  };
  const disableNotifyOffers = () => {
    dispatch({ type: 'GETNOTIFY', payload: { offers: false } });
  };

  useEffect(() => {
    socket.on('connect', () => {
      dispatch({ type: 'CONNECTED', payload: true });
      console.log('Connected!');
    });
    socket.on('refreshPlayers', (players) => {
      dispatch({ type: 'REFRESHPLAYERS', payload: players });
    });
    socket.on('updatePlayer', (player) => {
      dispatch({ type: 'UPDATEPLAYER', payload: player });
    });
    socket.on('startGame', () => {
      dispatch({ type: 'STARTGAME', payload: ['STARTGAME', true] });
    });
    socket.on('addedToRoom', (player) => {
      dispatch({ type: 'ADDEDTOROOM', payload: ['ADDEDTOROOM', player] });
    });
    socket.on('removedToRoom', () => {
      dispatch({ type: 'REMOVEDTOROOM', payload: 'REMOVEDTOROOM' });
    });
    socket.on('maxPlayersToRoom', () => {
      dispatch({ type: 'MAXPLAYERSTOROOM', payload: 'MAXPLAYERSTOROOM' });
    });
    socket.on('inGaming', () => {
      dispatch({ type: 'INGAMING', payload: 'INGAMING' });
    });
    socket.on('raffled', () => {
      dispatch({ type: 'RAFFLED', payload: 'RAFFLED' });
    });
    socket.on('notFound', () => {
      dispatch({ type: 'NOTFOUND', payload: 'NOTFOUND' });
    });
    socket.on('selectedAvatars', () => {
      setStartTimer(true);
      dispatch({ type: 'SELECTEDAVATARS', payload: 'SELECTEDAVATARS' });
    });
    socket.on('getProducts', (product) => {
      dispatch({ type: 'CHANGEDATA', payload: ['GETPRODUCTS', product] });
    });
    socket.on('getAdverts', (adverts) => {
      dispatch({ type: 'CHANGEDATA', payload: ['GETADVERTS', adverts] });
    });
    socket.on('getTax', (tax) => {
      dispatch({ type: 'CHANGEDATA', payload: ['GETTAX', tax] });
    });
    socket.on('getLogs', (logs) => {
      dispatch({ type: 'GETLOGS', payload: logs });
    });
    socket.on('getOffers', (offersAll, offersIndividual) => {
      let sl = [];
      sl.all = offersAll;
      sl.individual = offersIndividual;
      dispatch({ type: 'GETOFFERS', payload: sl });
    });
    socket.on('enableNotifyScene', () => {
      dispatch({ type: 'GETNOTIFY', payload: { scene: true } });
    });
    socket.on('enableNotifyOffers', () => {
      dispatch({ type: 'GETNOTIFY', payload: { offers: true } });
    });
    socket.on('stepFinish', (awaitPlayers) => {
      // setStartTimer(false);
      dispatch({ type: 'STEPFINISH', payload: ['STEPFINISH', awaitPlayers] });
    });
    socket.on('endRound', (round) =>{
      dispatch({ type: 'CHANGEDATA', payload: ['ENDROUND', round]})
    })
    socket.on('updateAwaitPlayers', (awaitPlayers) => {
      dispatch({ type: 'UPDATEAWAITPLAYERS', payload: awaitPlayers });
    });
    socket.on('updateGlobalPollution', (pollution) => {
      dispatch({ type: 'UPDATEGLOBALPOLLUTION', payload: pollution });
    });
    socket.on('updateGlobalProduction', (production) => {
      dispatch({ type: 'UPDATEGLOBALPRODUCTION', payload: production });
    });
    socket.on('disconnect', () => {
      dispatch({ type: 'DISCONNECTED', payload: false });
      console.log('Disconnected!');
    });

    socket.open();
  }, []);

  useEffect(() => {
    let interval = setInterval(() => {
      if (state.timer > 0 && startTimer) {
        dispatch({ type: 'UPDATETIMER', payload: state.timer - 1});
      } else if (startTimer) {
        setStartTimer(false);
        stepFinish();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [state.timer, startTimer]);

  return (
    <GameContext.Provider value={{ ...state, disableNotifyScene, disableNotifyOffers}}>
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

const addAdvert = (name, speciality, price, client, amount, priceType) => {
  socket.emit('addAdvert', name, speciality, price, client, amount, priceType);
}

const getAdverts = () => {
  socket.emit('getAdverts');
}

const deleteAdvert = (id) => {
  socket.emit('deleteAdvert', id);
}

const confirmOfferAll = (item, amount) => {
  socket.emit('confirmOfferAll', item, amount);
}

const confirmOffer = (item) => {
  socket.emit('confirmOffer', item);
}

const rejectOffer = (id) => {
  socket.emit('rejectOffer', id);
}

const stepFinish = () => {
  socket.emit('stepFinish');
}

const getTax = () => {
  socket.emit('getTax');
}

const endRound = () =>{
  socket.emit('endRound');
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
  getAdverts,
  deleteAdvert,
  confirmOfferAll,
  confirmOffer,
  rejectOffer,
  getTax,
  stepFinish,
  endRound
};