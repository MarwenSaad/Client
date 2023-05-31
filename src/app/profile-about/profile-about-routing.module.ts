import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileAboutComponent } from './profile-about.component';

const routes: Routes = [{ path: '', component: ProfileAboutComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileAboutRoutingModule { }
