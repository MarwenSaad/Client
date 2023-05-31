import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobSeekerSignUpRoutingModule } from './job-seeker-sign-up-routing.module';
import { JobSeekerSignUpComponent } from './job-seeker-sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    JobSeekerSignUpComponent
  ],
  imports: [
    CommonModule,
    JobSeekerSignUpRoutingModule,
    ReactiveFormsModule
  ]
})
export class JobSeekerSignUpModule { }
