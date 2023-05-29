import { EventEmitter } from 'events';

// --------------------------------------------------------------------------------
// src/config/transport/transport.dispatcher.ts
// --------------------------------------------------------------------------------

class TransportDispatcher extends EventEmitter {
  private static instance: TransportDispatcher;
  private readonly eventName = 'ipc-message';

  public myCustomEmit(messageChannel: string, ...args: any[]): Promise<any> {
    const [callback] = this.listeners(this.eventName);
    return callback ? callback(messageChannel, args) : null;
  }

  public myCustomOn(callback: (...args: any[]) => void) {
    const [currentCallback] = this.listeners(this.eventName);

    if (!currentCallback) {
      this.on(this.eventName, callback);
    }
  }

  public static build() {
    if (!TransportDispatcher.instance) {
      TransportDispatcher.instance = new TransportDispatcher();
    }

    return TransportDispatcher.instance;
  }
}

export const transportDispatcher = TransportDispatcher.build();
