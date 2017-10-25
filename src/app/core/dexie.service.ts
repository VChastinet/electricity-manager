import Dexie from 'dexie';

export class DexieService extends Dexie {
  constructor() {
    super('Manager');
    this.version(1).stores({
      devices: '++id',
      fare:'++id'
    });
  }
}