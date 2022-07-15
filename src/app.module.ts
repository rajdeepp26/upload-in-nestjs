import { Module } from '@nestjs/common';
import { UploadModule } from './modules/Upload.module'

@Module({
  imports: [UploadModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
