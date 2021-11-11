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
  // handleJoinRequest(client, @MessageBody() roomId: string): void {
  handleJoinRequest(client): void {
    // client je undefined kada je roomId kao parametar
    console.log(client);
    // this.server.to(roomId).emit('accessRequested');
  }

  // @SubscribeMessage('allowAccess')
  // allowAccess(client): void {
  //   this.server.to(roomId).emit('accessAllowed');
  // }
}
