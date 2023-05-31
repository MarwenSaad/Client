import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicProfileAboutRoutingModule } from './public-profile-about-routing.module';
import { PublicProfileAboutComponent } from './public-profile-about.component';


@NgModule({
  declarations: [
    PublicProfileAboutComponent
  ],
  imports: [
    CommonModule,
    PublicProfileAboutRoutingModule
  ]
})
export class PublicProfileAboutModule { }
