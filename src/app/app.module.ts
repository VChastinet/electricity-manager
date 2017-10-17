import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DeviceInputComponent } from './device-input/device-input.component';
import { FrontPageComponent } from './front-page/front-page.component';

import { MainTableModule } from './main-table/main-table.module';

import { DeviceDataService } from './device-data.service'

import { routing } from './app.routes'

@NgModule({
  declarations: [
    AppComponent,
    DeviceInputComponent,
    FrontPageComponent
  ],
  imports: [
    BrowserModule,
    MainTableModule,
    routing
  ],
  providers: [ DeviceDataService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
