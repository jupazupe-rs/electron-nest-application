import { NestFactory } from '@nestjs/core';
import { INestMicroservice } from '@nestjs/common';
import { AppModule } from '../server/app.module';
import { IPCTransportStrategy } from '../config/transport/transport.strategy';

export class AppNest {
  private nest: INestMicroservice;

  private constructor(nest: INestMicroservice) {
    this.nest = nest;
  }

  public static async create(): Promise<AppNest> {
    const nest = await NestFactory.createMicroservice(AppModule, { strategy: new IPCTransportStrategy() });
    return new AppNest(nest);
  }

  public listen(): Promise<void> {
    return this.nest.listen();
  }
}
