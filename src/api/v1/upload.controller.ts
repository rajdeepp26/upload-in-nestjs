import { Controller, Get, Res, Req, HttpStatus } from '@nestjs/common';
import { UploadService } from '../../services/upload.service';
import { Request, Response } from 'express';

@Controller('v1/upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) { }

  @Get()
  async getStatus(@Res() res: Response, @Req() req: Request) {
    try {
      const statusRespose = await this.uploadService.getStatus();

      res.status(HttpStatus.OK).json({ statusRespose })
    } catch (error) {
      res.status(error.status).json(error.response)
    }
  }
}
