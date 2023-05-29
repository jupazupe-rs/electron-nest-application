import { Component } from '@angular/core';
import { AppBridge } from '../../config/bridge/app.bridge';

@Component({
  selector: 'nfx-app-index',
  templateUrl: './app-index.component.html',
  styleUrls: ['./app-index.component.scss']
})
export class AppIndexComponent {
  public healthCheckResult: any;

  public async healthCheck() {
    const result = await AppBridge.app.healthCheck();
    console.log(result);
    this.healthCheckResult = result;
  }
}
