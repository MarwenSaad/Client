import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileAboutRoutingModule } from './profile-about-routing.module';
import { ProfileAboutComponent } from './profile-about.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProfileAboutComponent
  ],
  imports: [
    CommonModule,
    ProfileAboutRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProfileAboutModule { }
