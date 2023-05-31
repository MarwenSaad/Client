import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileEventsComponent } from './profile-events.component';

const routes: Routes = [{ path: '', component: ProfileEventsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileEventsRoutingModule { }
