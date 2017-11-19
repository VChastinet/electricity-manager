import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ActivatedRoute, Router} from '@angular/router';

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
  id: number = null;

  constructor(private deviceDataService: DeviceDataService, private route: ActivatedRoute, private router: Router /*private fb: FormBuilder*/) {

    // this.myForm = fb.group({
    //   name: ["", Validators.compose([Validators.required, Validators.minLength(3)])],
    //   potency: ["", Validators.required]
    // })

    this.route.params.subscribe(params => {
      this.id = Number(params.id);
      if (this.id){
        this.deviceDataService
          .getById(this.id)
          .then((device: DeviceWithID) => {
            this.deviceInput = device.deviceInput;
            this.deviceInput.potency *= 1000 
          });
      }
    });
  }

  checkParams(){
    this.route.params.subscribe(params => {
      let id = Number(params.id);
      if (id){
        this.deviceDataService
          .getById(id)
          .then((device: DeviceWithID) => {
            this.deviceInput = device.deviceInput;
            this.deviceInput.potency *= 1000 
          });
      }
    });
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
    deviceInput.potency /= 1000;

    deviceInput.consume = ((deviceInput.potency * deviceInput.usage) * deviceInput.quantity).toFixed(2);

    deviceInput.unity = "hm";
  }

  saveData(event){
    event.preventDefault();

    let deviceInput = this.deviceInput;

    this.adjustValues(deviceInput);

    const devices: Device = {
      deviceInput
    };

    if(this.id){
      let id = this.id;
      this.deviceDataService
        .update(id, { deviceInput })
        .then(() =>{
          const updateDevice = this.deviceList.find((device) => device.id === id);
          this.deviceList = [...this.deviceList.filter((device) => device.id != id), Object.assign({}, updateDevice, { deviceInput })];
          this.router.navigate(['']);
        });
    } else {
      this.deviceDataService
        .add(devices)
        .then((id) =>{
          this.deviceList = [...this.deviceList, Object.assign({}, devices, { id })];
        });
        
      this.deviceInput = new DeviceComponent;
    }
  }
}
