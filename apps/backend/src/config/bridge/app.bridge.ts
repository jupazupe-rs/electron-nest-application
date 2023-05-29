import { contextBridge, ipcRenderer } from 'electron';

const bridgeMethods = {
  app: {
    healthCheck: () => ipcRenderer.invoke('app.healthcheck')
  }
};

contextBridge.exposeInMainWorld('AppBridge', bridgeMethods);
