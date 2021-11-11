import { createContext } from 'react';
import { io } from 'socket.io-client';

export const socket = io();
export const SocketContext = createContext({
  emit: (eventType: string, roomId: string) => {},
  on: (eventType: string, cb: (message: string) => void) => {}
});