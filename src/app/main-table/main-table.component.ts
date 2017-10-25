import { Component, OnInit } from '@angular/core';

import { DeviceWithID, DeviceDataService } from '../device-data.service';

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.css']
})
export class MainTableComponent implements OnInit {

  public advancedTable: boolean = false;
  public tableButtonName: string = 'Tabela Avançada';

  deviceList: Array<DeviceWithID>;

  constructor(private devicedataService: DeviceDataService) { }

  showAdvanced() {

    document.querySelector('#advanced-table').classList.toggle('table-show');
    
    if(!this.advancedTable){
      this.tableButtonName = 'Tabela Simples';
    } else if (this.advancedTable) {
      this.tableButtonName =  'Tabela Avançada';
    }

    this.advancedTable = !this.advancedTable;
    
  }

  showTotal(){
    let table = document.querySelector('#total-table');
    table.classList.toggle('table-hide');
    table.classList.toggle('table-show');
  }

  ngOnInit() {
    this.devicedataService
      .getAll()
      .then((devices: Array<DeviceWithID>) => {
        this.deviceList = devices;
      })
  }

}
