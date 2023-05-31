import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobApplicationDetailRoutingModule } from './job-application-detail-routing.module';
import { JobApplicationDetailComponent } from './job-application-detail.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    JobApplicationDetailComponent
  ],
  imports: [
    CommonModule,
    JobApplicationDetailRoutingModule,
    ReactiveFormsModule
  ]
})
export class JobApplicationDetailModule { }
