import { RouterModule, Routes } from '@angular/router';

import { FrontPageComponent } from './front-page/front-page.component';
import { DeviceInputComponent } from './device-input/device-input.component';

const appRoutes: Routes =[
      { path: '', component: FrontPageComponent },
      { path: 'input', component: DeviceInputComponent },
      { path: 'input/:id', component: DeviceInputComponent },
      { path: '**', redirectTo: '' }
    ];

export const routing = RouterModule.forRoot(appRoutes);