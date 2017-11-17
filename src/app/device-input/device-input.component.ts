import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

import { DeviceComponent } from '../device.component'
import { DeviceWithID, Device, DeviceDataService } from '../device-data.service'

@Component({
  selector: 'app-device-input',
  templateUrl: './device-input.component.html',
  styleUrls: ['./device-input.component.css']
})
export class DeviceInputComponent{

  //private myForm = FormGroup;
  deviceList: Array<DeviceWithID> = [];
  public deviceInput: DeviceComponent = new DeviceComponent;

  constructor(private deviceDataService: DeviceDataService /*private fb: FormBuilder*/) {

    // this.myForm = fb.group({
    //   name: ["", Validators.compose([Validators.required, Validators.minLength(3)])],
    //   potency: ["", Validators.required]
    // })
  }

  adjustValues(deviceInput){
    switch (deviceInput.unity) {
      case "md":
        deviceInput.usage = (deviceInput.usage * 30)/60;
      break;
      case "hd":
        deviceInput.usage = (deviceInput.usage * 30);
      break;
      case "hs":
        deviceInput.usage = (deviceInput.usage*4);
        break;
      case "ds":
        deviceInput.usage = Math.floor((deviceInput.usage * 4.286)*24);
        break;
      case "dm":
        deviceInput.usage = (deviceInput.usage * 24);
        break;
      default:
        break;
    }
    deviceInput.potency = deviceInput.potency/1000;

    deviceInput.consume = (deviceInput.potency * deviceInput.usage) * deviceInput.quantity;

  }

  saveData(event){
    event.preventDefault();

    let deviceInput = this.deviceInput;

    this.adjustValues(deviceInput);

    const devices: Device = {
      deviceInput
    };

    this.deviceDataService
      .add(devices)
      .then((id) =>{
        this.deviceList = [...this.deviceList, Object.assign({}, devices, { id })];
      });

      
    this.deviceInput = new DeviceComponent;
      
  }
}
