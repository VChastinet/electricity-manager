import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TotalTableComponent } from './total-table/total-table.component';
import { MainTableComponent } from './main-table.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TotalTableComponent,
    MainTableComponent
  ],
  exports: [
    TotalTableComponent,
    MainTableComponent
  ]
})
export class MainTableModule { }
