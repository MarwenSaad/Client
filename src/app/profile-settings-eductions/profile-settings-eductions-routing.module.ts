import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileSettingsEductionsComponent } from './profile-settings-eductions.component';

const routes: Routes = [{ path: '', component: ProfileSettingsEductionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileSettingsEductionsRoutingModule { }
