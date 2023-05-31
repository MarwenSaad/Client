import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobDetailRoutingModule } from './job-detail-routing.module';
import { JobDetailComponent } from './job-detail.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    JobDetailComponent
  ],
  imports: [
    CommonModule,
    JobDetailRoutingModule,
    ReactiveFormsModule
  ]
})
export class JobDetailModule { }
