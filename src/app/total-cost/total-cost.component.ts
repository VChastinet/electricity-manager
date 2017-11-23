import { Component, Input, OnInit } from '@angular/core';
import { DeviceWithID } from '../device-data.service';

@Component({
  selector: 'app-total-cost',
  templateUrl: './total-cost.component.html',
  styleUrls: ['./total-cost.component.css']
})
export class TotalCostComponent implements OnInit {

  cost: number = 100;
  @Input() deviceList: Array<DeviceWithID>;
  
  constructor() { }
  
  ngOnInit() {
  }

}
