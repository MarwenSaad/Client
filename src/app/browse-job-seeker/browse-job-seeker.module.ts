import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowseJobSeekerRoutingModule } from './browse-job-seeker-routing.module';
import { BrowseJobSeekerComponent } from './browse-job-seeker.component';


@NgModule({
  declarations: [
    BrowseJobSeekerComponent
  ],
  imports: [
    CommonModule,
    BrowseJobSeekerRoutingModule
  ]
})
export class BrowseJobSeekerModule { }
