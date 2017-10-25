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

  saveData(event){
    event.preventDefault();

    let deviceInput = this.deviceInput;

    const devices: Device = {
      deviceInput,
      done: false
    };

    this.deviceDataService
      .add(devices)
      .then((id) =>{
        this.deviceList = [...this.deviceList, Object.assign({}, devices, { id })];
      });

      
    this.deviceInput = new DeviceComponent;
      
  }
}
