import { Input } from '@angular/core';

export class DeviceComponent{
  @Input() name: string = "";
  @Input() potency: number = null;
  @Input() usage: number = null;
  @Input() unity: string = "hd";
  @Input() quantity: number = 1;
  consume: number = null;
  cost: number = null;
}