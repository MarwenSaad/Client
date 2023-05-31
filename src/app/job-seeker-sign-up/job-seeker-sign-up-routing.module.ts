import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobSeekerSignUpComponent } from './job-seeker-sign-up.component';

const routes: Routes = [{ path: '', component: JobSeekerSignUpComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobSeekerSignUpRoutingModule { }
