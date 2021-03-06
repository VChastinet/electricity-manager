import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { DeviceWithID, DeviceDataService } from '../device-data.service';
import { FareWithID, FareDataService } from '../fare-data.service';

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.css']
})
export class MainTableComponent {

  fare: number;
  deviceList: Array<DeviceWithID>;

  constructor(private fareDataService: FareDataService, private devicedataService: DeviceDataService) {

    this.fareDataService
    .getAll()
    .then((fare: Array<FareWithID>) => {
      console.log("accessing fare database");
      this.fare = fare[0].fareInput;

      this.devicedataService
        .getAll()
        .then((devices: Array<DeviceWithID>) => {
          this.deviceList = devices;

          this.deviceList.forEach(device =>{
            device.deviceInput.cost = (this.fare * device.deviceInput.consume);
          });
        });
    })
    .catch(()=> {
      console.log("creating new fare database");
      this.devicedataService
      .getAll()
      .then((devices: Array<DeviceWithID>) => {
        this.deviceList = devices;

        this.deviceList.forEach(device =>{
          device.deviceInput.cost = 0;
        });
      });
    }); 
  }

  onFareSet(event){
    this.fare = event.newFare;
    this.deviceList.forEach(device =>{
      device.deviceInput.cost = Number((this.fare * device.deviceInput.consume).toFixed(2));
    });
  }

  remove(id: number, event){
     this.devicedataService.remove(id)
       .then(() => {
       this.deviceList = this.deviceList.filter(device => device.id !== id);
      });
  }

  showTotal(){
    let table = document.querySelector('#total-table');
    table.classList.toggle('table-hide');
    table.classList.toggle('table-show');
  }
}
