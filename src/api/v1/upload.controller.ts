import {
  Controller,
  Get,
  Res,
  Req,
  HttpStatus,
  Post,
  UseInterceptors,
  UploadedFile,
  UnprocessableEntityException,
} from '@nestjs/common';
import { UploadService } from '../../services/upload.service';
import { Request, Response } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { saveImage } from '../../helpers/image-storage'

@Controller('v1/upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Get()
  async getSystemStatus(@Res() res: Response, @Req() req: Request) {
    try {
      const systemStatusRespose = await this.uploadService.getSystemStatus();

      res.status(HttpStatus.OK).json({ systemStatusRespose });
    } catch (error) {
      res.status(error.status).json(error.response);
    }
  }

  @Post()
  @UseInterceptors(FileInterceptor('file', saveImage))
  uploadImage(
    @UploadedFile()
    file: Express.Multer.File,
    @Res() res: Response,
    @Req() req: Request,
    ) {
      try {
      if(!file){
        throw new UnprocessableEntityException('File must be of type jpg/jpeg')
      }

      res.status(HttpStatus.OK).json({ status: "file uploaded successfully" });
      
    } catch (error) {
      res.status(error.status).json(error.response);
    }
  }
}
