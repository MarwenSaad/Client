import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicProfileHomeRoutingModule } from './public-profile-home-routing.module';
import { PublicProfileHomeComponent } from './public-profile-home.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PublicProfileHomeComponent
  ],
  imports: [
    CommonModule,
    PublicProfileHomeRoutingModule,
    ReactiveFormsModule
  ]
})
export class PublicProfileHomeModule { }
