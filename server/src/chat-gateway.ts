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

  @SubscribeMessage('requestAccess')
  handleJoinRequest(@MessageBody() roomId: string): void {
    console.log(roomId);
    this.server.emit('requestBack', 'vracen');
  }
}
