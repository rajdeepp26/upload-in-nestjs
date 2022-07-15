import { Module } from '@nestjs/common';
import { UploadController } from '../api/v1/upload.controller';
import { UploadService } from '../services/upload.service';

@Module({
    imports: [],
    controllers: [UploadController],
    providers: [UploadService],
    exports: [],
})
export class UploadModule { }
