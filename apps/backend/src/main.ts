import { app } from 'electron';
import { AppNest } from './app/app.nest';
import { AppWindow } from './app/app.window';

app.whenReady().then(async () => {
  const window = await AppWindow.create();
  const nest = await AppNest.create();
  await window.load();
  await nest.listen();
});
