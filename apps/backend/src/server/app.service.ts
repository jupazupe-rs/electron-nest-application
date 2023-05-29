import { Injectable } from '@nestjs/common';
import { HealthCheckService } from '@nestjs/terminus';

@Injectable()
export class AppService {
  constructor(private health: HealthCheckService) {}

  public async healthCheck(): Promise<any> {
    return this.health.check([]);
  }
}
