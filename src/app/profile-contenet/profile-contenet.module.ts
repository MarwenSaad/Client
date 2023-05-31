import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileContenetRoutingModule } from './profile-contenet-routing.module';
import { ProfileContenetComponent } from './profile-contenet.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProfileContenetComponent
  ],
  imports: [
    CommonModule,
    ProfileContenetRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProfileContenetModule { }
