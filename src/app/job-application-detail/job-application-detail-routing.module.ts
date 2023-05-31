import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobApplicationDetailComponent } from './job-application-detail.component';

const routes: Routes = [{ path: '', component: JobApplicationDetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobApplicationDetailRoutingModule { }
