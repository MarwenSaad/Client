import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileEventsRoutingModule } from './profile-events-routing.module';
import { ProfileEventsComponent } from './profile-events.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProfileEventsComponent
  ],
  imports: [
    CommonModule,
    ProfileEventsRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProfileEventsModule { }
