import { ConfigService } from '@nestjs/config';
import { BrowserWindow, BrowserWindowConstructorOptions, WebPreferences } from 'electron';
import { configModuleOptions } from '../config/environment/options/config-module.options';

const configService = new ConfigService(configModuleOptions.validationSchema.validate({}).value);

export class AppWindow {
  private window: BrowserWindow;
  private url: string;

  private constructor(window: BrowserWindow, url: string) {
    this.window = window;
    this.url = url;
  }

  public static async create(): Promise<AppWindow> {
    const url = configService.get<string>('FRONTEND_URL');
    const preload = configService.get<string>('PRELOAD_BRIDGE_URL');

    const webPreferences: WebPreferences = { preload };
    const options: BrowserWindowConstructorOptions = { webPreferences, width: 850 };

    const window = new BrowserWindow(options);

    return new AppWindow(window, url);
  }

  public async load(): Promise<void> {
    return this.window.loadURL(this.url);
  }
}
