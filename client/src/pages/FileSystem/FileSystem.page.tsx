import React, { useContext, useEffect } from 'react';

import { SocketContext } from '../../context/socket';

const FileSystem = () => {
  const socket = useContext(SocketContext);

  useEffect(() => {
    socket.emit('createRoom');

    socket.on('roomCreated', roomId => {
      sessionStorage.setItem('roomId', roomId);
    });

    socket.on('accessRequested', () => {
      if (window.confirm('User wants to join, accept?')) {
        socket.emit('allowAccess');
      } else {
        socket.emit('declineAccess');
      }
    });

    return () => {
      socket.off('createRoom');
    }
  }, [socket])

  return (
    <div>
      File System
    </div>
  )
}

export default FileSystem;
