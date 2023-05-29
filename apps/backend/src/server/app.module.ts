import { Module } from '@nestjs/common';
import { EnvironmentModule } from '../config/environment/environment.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TerminusModule } from '@nestjs/terminus';

@Module({
  imports: [TerminusModule, EnvironmentModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
