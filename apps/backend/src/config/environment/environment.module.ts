import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configModuleOptions } from './options/config-module.options';

@Module({
  imports: [ConfigModule.forRoot(configModuleOptions)],
  exports: [ConfigModule]
})
export class EnvironmentModule {}
