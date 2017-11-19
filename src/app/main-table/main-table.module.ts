import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from '../app.routes';

import { TotalTableComponent } from './total-table/total-table.component';
import { MainTableComponent } from './main-table.component';
import { FareComponent } from '../fare/fare.component'

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    TotalTableComponent,
    MainTableComponent,
    FareComponent
  ],
  exports: [
    TotalTableComponent,
    MainTableComponent
  ]
})
export class MainTableModule { }
