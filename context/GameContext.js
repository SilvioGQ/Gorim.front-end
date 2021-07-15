import React, { useEffect, useReducer } from 'react';
import io from 'socket.io-client';
import { API_URL_HERO } from '@env';

const socket = io(API_URL_HERO, {
  autoConnect: false
});

const GameContext = React.createContext();

const initialState = {
  isConnected: false,
  inGame: false,
  stage: null,
  players: [],
  player: {},
  data: null,
  offers: null,
  notify: { scene: false, offers: false }
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'CONNECTED':
      return {
        ...state,
        isConnected: action.payload
      };
    case 'REFRESHPLAYERS':
      return {
        ...state,
        players: action.payload
      };
    case 'UPDATEPLAYER':
      return {
        ...state,
        player: action.payload
      };
    case 'STARTGAME':
      return {
        ...state,
        stage: action.payload[0],
        inGame: action.payload[1]
      };
    case 'ADDEDTOROOM':
      return {
        ...state,
        stage: action.payload[0],
        player: action.payload[1],
      };
    case 'REMOVEDTOROOM':
      return {
        ...initialState,
        isConnected: true,
        stage: action.payload
      };
    case 'MAXPLAYERSTOROOM':
    case 'INGAMING':
    case 'NOTFOUND':
    case 'SELECTEDAVATARS':
      return {
        ...state,
        stage: action.payload
      };
    case 'CHANGEDATA':
      return {
        ...state,
        stage: action.payload[0],
        data: action.payload[1]
      };
    case 'GETOFFERS':
      return {
        ...state,
        offers: action.payload
      };
    case 'GETNOTIFY':
      return {
        ...state,
        notify: {
          ...state.notify,
          ...action.payload
        }
      }
    case 'STEPFINISH':
      return {
        ...state,
        stage: action.payload[0],
        players: action.payload[1]
      };
    case 'DISCONNECTED':
      return {
        ...state,
        isConnected: action.payload
      };
    default:
      return state;
  }
}

const GameProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

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
    socket.on('notFound', () => {
      dispatch({ type: 'NOTFOUND', payload: 'NOTFOUND' });
    });
    socket.on('selectedAvatars', () => {
      dispatch({ type: 'SELECTEDAVATARS', payload: 'SELECTEDAVATARS' });
    });
    socket.on('getProducts', (product) => {
      dispatch({ type: 'CHANGEDATA', payload: ['GETPRODUCTS', product] });
    });
    socket.on('getAdverts', (adverts) => {
      dispatch({ type: 'CHANGEDATA', payload: ['GETADVERTS', adverts] });
    });
    socket.on('getLogs', (logs) => {
      dispatch({ type: 'CHANGEDATA', payload: ['GETLOGS', logs] });
    });
    socket.on('getOffers', (offersAll, offersIndividual) => {
      let sl = [];
      sl.all = offersAll;
      sl.individual = offersIndividual;
      dispatch({ type: 'GETOFFERS', payload: sl });
    });
    socket.on('notifyScene', (notify) => {
      dispatch({ type: 'GETNOTIFY', payload: { scene: notify } });
    });
    socket.on('notifyOffers', (notify) => {
      dispatch({ type: 'GETNOTIFY', payload: { offers: notify } });
    });
    socket.on('stepFinish', (players) => {
      dispatch({ type: 'STEPFINISH', payload: ['STEPFINISH', players] });
    })
    socket.on('disconnect', () => {
      dispatch({ type: 'DISCONNECTED', payload: false });
      console.log('Disconnected!');
    });

    socket.open();
  }, []);

  return (
    <GameContext.Provider value={state}>
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

const toPlant = (parcelLand, inventory) => {
  socket.emit('toPlant', parcelLand, inventory);
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

const addAdvert = (name, speciality, price, client, amount) => {
  socket.emit('addAdvert', name, speciality, price, client, amount);
}

const getAdverts = () => {
  socket.emit('getAdverts');
}

const deleteAdvert = (id) => {
  socket.emit('deleteAdvert', id);
}

const getLogs = () => {
  socket.emit('getLogs');
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
  makeTransfer,
  getProducts,
  addAdvert,
  getAdverts,
  deleteAdvert,
  getLogs,
  confirmOfferAll,
  confirmOffer,
  rejectOffer,
  stepFinish
};