import { ipcMain } from 'electron';
import { applyDecorators } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { transportDispatcher } from './transport.dispatcher';

// --------------------------------------------------------------------------------
// src/config/transport/transport.decorator.ts
// --------------------------------------------------------------------------------

export function Handle(messageChannel: string) {
  ipcMain.handle(messageChannel, (...args) => transportDispatcher.myCustomEmit(messageChannel, ...args));
  return applyDecorators(MessagePattern(messageChannel));
}
