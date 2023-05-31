import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicProfileCompanyJobsRoutingModule } from './public-profile-company-jobs-routing.module';
import { PublicProfileCompanyJobsComponent } from './public-profile-company-jobs.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PublicProfileCompanyJobsComponent
  ],
  imports: [
    CommonModule,
    PublicProfileCompanyJobsRoutingModule,
    ReactiveFormsModule
  ]
})
export class PublicProfileCompanyJobsModule { }
