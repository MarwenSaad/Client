import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobGateServicesRoutingModule } from './job-gate-services-routing.module';
import { JobGateServicesComponent } from './job-gate-services.component';


@NgModule({
  declarations: [
    JobGateServicesComponent
  ],
  imports: [
    CommonModule,
    JobGateServicesRoutingModule
  ]
})
export class JobGateServicesModule { }
