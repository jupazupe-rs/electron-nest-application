import { Logger } from '@nestjs/common';
import { CustomTransportStrategy, MessageHandler, Server } from '@nestjs/microservices';
import { transportDispatcher } from './transport.dispatcher';

// --------------------------------------------------------------------------------
// src/config/transport/transport.strategy.ts
// --------------------------------------------------------------------------------

export class IPCTransportStrategy extends Server implements CustomTransportStrategy {
  logger = new Logger(IPCTransportStrategy.name);

  async onMessage(messageChannel: string, ...args: any[]): Promise<any> {
    const handler: MessageHandler | undefined = this.messageHandlers.get(messageChannel);

    if (handler) {
      this.logger.debug(`Process message ${messageChannel}`);
      const ipcMainEventObject = args.shift();
      const result = await handler(args, { evt: ipcMainEventObject });
      this.logger.debug(`Process message ${messageChannel}, result: ${JSON.stringify(result)}`);
      return result;
    }
  }

  listen(callback: () => void): any {
    transportDispatcher.myCustomOn(this.onMessage.bind(this));
    callback();
  }

  close(): any {}
}
