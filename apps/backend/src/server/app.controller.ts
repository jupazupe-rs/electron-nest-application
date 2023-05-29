import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { Handle } from '../config/transport/transport.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Handle('app.healthcheck')
  healthCheck(): Promise<any> {
    return this.appService.healthCheck();
  }
}
