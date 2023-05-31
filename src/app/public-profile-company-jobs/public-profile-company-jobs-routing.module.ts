import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicProfileCompanyJobsComponent } from './public-profile-company-jobs.component';

const routes: Routes = [{ path: '', component: PublicProfileCompanyJobsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicProfileCompanyJobsRoutingModule { }
