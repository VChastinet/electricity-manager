import { Injectable } from '@angular/core';
import { DeviceComponent } from './device.component'

import { DexieService } from './core/dexie.service';
import  Dexie from 'dexie';

export interface Device {
  deviceInput: DeviceComponent;
  done: boolean;
}

export interface DeviceWithID extends Device {
  id: number;
}


@Injectable()

export class DeviceDataService {

  table: Dexie.Table<DeviceWithID, number>;

  constructor(private dexieService: DexieService) {
    this.table = this.dexieService.table('devices');
   }


   getAll() {
    return this.table.toArray();
  }

  add(data) {
    return this.table.add(data);
  }

  update(id, data) {
    return this.table.update(id, data);
  }

  remove(id) {
    return this.table.delete(id);
  }
}


