import * as Joi from 'joi';
import { join } from 'path';
import { app } from 'electron';

const isPackaged = app && app.isPackaged;

export const configModuleSchema = Joi.object({
  FRONTEND_URL: Joi.string().default(isPackaged ? `file://${__dirname}/../../../../frontend/index.html` : 'http://localhost:4200'),
  PRELOAD_BRIDGE_URL: Joi.string().default(join(__dirname, '/../../bridge/app.bridge.js'))
});
