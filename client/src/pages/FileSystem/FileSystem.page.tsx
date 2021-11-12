import React, { useContext, useEffect } from 'react';

import { SocketContext } from '../../context/socket';

const FileSystem = () => {
  const socket = useContext(SocketContext);

  useEffect(() => {
    socket.emit('createRoom');

    socket.on('roomCreated', roomId => {
      sessionStorage.setItem('roomId', roomId);
    });

    socket.on('accessRequested', clientId => {
      // remove timeout in production
      setTimeout(() => {
        if (window.confirm('User wants to join, accept?')) {
          socket.emit('allowAccess', clientId);
        } else {
          socket.emit('declineAccess', clientId);
        }
      }, 3000);
    });

    return () => {
      socket.off('roomCreated');
    }
  }, [socket])

  return (
    <div>
      File System
    </div>
  )
}

export default FileSystem;
