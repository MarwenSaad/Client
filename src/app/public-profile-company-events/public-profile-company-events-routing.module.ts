import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicProfileCompanyEventsComponent } from './public-profile-company-events.component';

const routes: Routes = [{ path: '', component: PublicProfileCompanyEventsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicProfileCompanyEventsRoutingModule { }
