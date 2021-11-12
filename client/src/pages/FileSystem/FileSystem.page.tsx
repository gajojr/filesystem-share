import React, { useContext, useEffect } from 'react';

import { SocketContext } from '../../context/socket';
import { FileSystemContainer } from './FileSystem.style';

import FileTree from '../../components/FileSystemComponents/FileTree/FileTree.component';

const FileSystem = () => {
  const socket = useContext(SocketContext);

  useEffect(() => {
    socket.emit('createRoom');

    socket.on('roomCreated', roomId => {
      // we need roomId for button that admin will click to copy and send to others
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
    <FileSystemContainer>
      <FileTree />
    </FileSystemContainer>
  )
}

export default FileSystem;
