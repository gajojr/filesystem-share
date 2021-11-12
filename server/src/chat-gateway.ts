import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

@WebSocketGateway()
export class ChatGateway {
  @WebSocketServer()
  server;

  @SubscribeMessage('createRoom')
  createRoom(client): void {
    // po defaultu id socketa je i ime sobe u kojoj se nalazi
    console.log(this.server.sockets.adapter.rooms);
    this.server.to(client.id).emit('roomCreated', client.id);
  }

  @SubscribeMessage('requestAccess')
  handleJoinRequest(client, roomId): void {
    this.server.to(roomId).emit('accessRequested', client.id);
  }

  @SubscribeMessage('allowAccess')
  allowAccess(@MessageBody() clientId: string): void {
    this.server.to(clientId).emit('accessAllowed');
  }

  @SubscribeMessage('declineAccess')
  declineAccess(@MessageBody() clientId: string): void {
    this.server.to(clientId).emit('accessDeclined');
  }
}
