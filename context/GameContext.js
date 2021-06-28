import React, { useEffect, useReducer } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3000', {
  autoConnect: false
});

const GameContext = React.createContext();

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
    case 'ADDEDROOM':
      return {
        ...state,
        player: action.payload
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

const initialState = {
  isConnected: false,
  players: [],
  player: {}
}

const GameProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    socket.on('connect', () => {
      dispatch({ type: 'CONNECTED', payload: true });
      console.log('Connected!');
    });
    socket.on('refreshPlayers', players => {
      dispatch({ type: 'REFRESHPLAYERS', payload: players });
    });
    socket.on('addedRoom', player => {
      dispatch({ type: 'ADDEDROOM', payload: player});
    });
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

const addToRoom = (name, roomId) => {
  socket.emit('addToRoom', name, roomId);
}

export { 
  GameContext, 
  GameProvider, 
  addToRoom
};