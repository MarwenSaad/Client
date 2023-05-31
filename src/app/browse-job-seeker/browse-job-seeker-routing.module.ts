import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowseJobSeekerComponent } from './browse-job-seeker.component';

const routes: Routes = [{ path: '', component: BrowseJobSeekerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrowseJobSeekerRoutingModule { }
