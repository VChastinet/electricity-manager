import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DeviceInputComponent } from './device-input/device-input.component';
import { FrontPageComponent } from './front-page/front-page.component';

import { MainTableModule } from './main-table/main-table.module';
import { CoreModule } from './core/core.module'

import { DeviceDataService } from './device-data.service';
import { FareDataService } from './fare-data.service';

import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    DeviceInputComponent,
    FrontPageComponent
  ],
  imports: [
    BrowserModule,
    MainTableModule,
    FormsModule,
    CoreModule,
    routing
  ],
  providers: [ DeviceDataService, FareDataService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
