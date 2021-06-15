import React from "react";
import io from 'socket.io-client';

const socket = io('http://localhost:3000/');
  // const socket = io('https://gorim-backend.herokuapp.com/');
export const socketContext = React.createContext(socket);