import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowseCompaniesComponent } from './browse-companies.component';

const routes: Routes = [{ path: '', component: BrowseCompaniesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrowseCompaniesRoutingModule { }
