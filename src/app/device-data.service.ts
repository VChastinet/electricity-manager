import { Injectable } from '@angular/core';
import { DeviceComponent } from './device.component'


@Injectable()

export class DeviceDataService {

  public devices: DeviceComponent;

  constructor() {
    
   }


  add (device: DeviceComponent){
    this.devices = device;
  }

  getDevices(){
    return this.devices
  }
}


