import { ConfigModuleOptions } from '@nestjs/config';
import { configModuleSchema } from './config-module.schema';

export const configModuleOptions: ConfigModuleOptions = {
  validationSchema: configModuleSchema,
  isGlobal: true
};
