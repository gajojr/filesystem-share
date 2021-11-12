import { Controller, Get } from '@nestjs/common';
// import { FileSystemService } from './file-system.service';

import * as fs from 'fs';

@Controller('file-system')
export class FileSystemController {
  // constructor(fileSystemService: FileSystemService) {}

  @Get()
  getInitialFileTree() {
    const folders = fs.readdirSync('../../../../');

    return folders;
  }
}
