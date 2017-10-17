import { Input } from '@angular/core';

export class DeviceComponent{
  @Input() name: string = "";
  @Input() potency: number = null;
  @Input() usage: number = null;
  @Input() unity: string = "hm";
}