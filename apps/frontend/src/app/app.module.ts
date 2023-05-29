import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppIndexComponent } from './index/app-index.component';

@NgModule({
  bootstrap: [AppIndexComponent],
  declarations: [AppIndexComponent],
  imports: [BrowserModule, AppRoutingModule]
})
export class AppModule {}
