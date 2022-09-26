import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: `Hello World ! process.env.SANDBOX_VAR equals to ${String(process.env.SANDBOX_VAR)}` };
  }
}
