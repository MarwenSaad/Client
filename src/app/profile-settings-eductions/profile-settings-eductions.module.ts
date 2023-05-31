import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileSettingsEductionsRoutingModule } from './profile-settings-eductions-routing.module';
import { ProfileSettingsEductionsComponent } from './profile-settings-eductions.component';


@NgModule({
  declarations: [
    ProfileSettingsEductionsComponent
  ],
  imports: [
    CommonModule,
    ProfileSettingsEductionsRoutingModule
  ]
})
export class ProfileSettingsEductionsModule { }
