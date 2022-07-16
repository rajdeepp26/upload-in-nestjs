import { Injectable } from '@nestjs/common';

@Injectable()
export class UploadService {

  /**
   * get system status
   * @returns {string}
   */
  async getSystemStatus(): Promise<string> {
    try {
      return 'System is up!';
    } catch (error) {
      throw error;
    }
  }
}
