import { Component, Input, OnInit } from '@angular/core';
import { DeviceWithID } from '../../device-data.service';

@Component({
  selector: 'app-total-table',
  templateUrl: './total-table.component.html',
  styleUrls: ['./total-table.component.css']
})
export class TotalTableComponent implements OnInit {

@Input() deviceList: Array<DeviceWithID>;

  constructor() { }

  totals(item){
    let totalSum = 0;
    if(this.deviceList != undefined){
      this.deviceList.forEach(device => {
        totalSum += device.deviceInput[item];
      });
    }
    return totalSum;
  }

  ngOnInit() {
    
  }

}
