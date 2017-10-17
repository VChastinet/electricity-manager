import { Component, OnInit } from '@angular/core';
//import { FormGroup, FormBuilder, Validators } from '@angular/forms'

import { DeviceComponent } from '../device.component'

import { DeviceDataService } from '../device-data.service'

@Component({
  selector: 'app-device-input',
  templateUrl: './device-input.component.html',
  styleUrls: ['./device-input.component.css']
})
export class DeviceInputComponent implements OnInit {

  //private myForm = FormGroup;
  public device: DeviceComponent = new DeviceComponent;

  constructor(public service: DeviceDataService /*private fb: FormBuilder*/) {

    this.service = service;
    // this.myForm = fb.group({
    //   name: ["", Validators.compose([Validators.required, Validators.minLength(3)])],
    //   potency: ["", Validators.required]
    // })
  }

  saveData(event){
    event.preventDefault();

    console.log(this.device);

    this.service.add(this.device);

  }

  ngOnInit() {
  }

}
