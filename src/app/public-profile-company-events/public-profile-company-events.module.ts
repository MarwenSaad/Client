import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicProfileCompanyEventsRoutingModule } from './public-profile-company-events-routing.module';
import { PublicProfileCompanyEventsComponent } from './public-profile-company-events.component';


@NgModule({
  declarations: [
    PublicProfileCompanyEventsComponent
  ],
  imports: [
    CommonModule,
    PublicProfileCompanyEventsRoutingModule
  ]
})
export class PublicProfileCompanyEventsModule { }
