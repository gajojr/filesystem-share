import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatGateway } from './chat-gateway';
import { FileSystemModule } from './file-system/file-system.module';

@Module({
  imports: [FileSystemModule],
  controllers: [AppController],
  providers: [AppService, ChatGateway],
})
export class AppModule {}
