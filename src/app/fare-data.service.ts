import { Injectable } from '@angular/core';

import { DexieService } from './core/dexie.service';
import  Dexie from 'dexie';

export interface Fare {
  fareInput: number;
}

export interface FareWithID extends Fare {
  id: number;
}

@Injectable()

export class FareDataService {

  table: Dexie.Table<FareWithID, number>;

  constructor(private dexieService: DexieService) {
    this.table = this.dexieService.table('fare');
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