import React, { FormEvent, useContext } from 'react'

import { SocketContext } from '../../../context/socket';

import { FormContainer } from './Form.style';

const Form = () => {
  const socket = useContext(SocketContext);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const roomId = (e as any).target['room-id'].value;

    socket.emit('requestAccess', roomId);

    socket.on('accessAllowed', () => {
      window.location.href = '/file-system';
    });

    socket.on('accessDeclined', () => {
      alert("User hasn't accepted your request");
    });
  }

  const createRoom = () => {
    window.location.href = '/file-system';
  }

  return (
    <FormContainer onSubmit={onSubmit}>
      <button type='button' onClick={createRoom}>Open your file system</button>
      or
      <label>
        Input room id for someone's file system:
        <input type="text" required name="room-id" />
      </label>
      <button>Request access to file system</button>
    </FormContainer>
  )
}

export default Form;
