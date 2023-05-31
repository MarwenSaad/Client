import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowseCompaniesRoutingModule } from './browse-companies-routing.module';
import { BrowseCompaniesComponent } from './browse-companies.component';


@NgModule({
  declarations: [
    BrowseCompaniesComponent
  ],
  imports: [
    CommonModule,
    BrowseCompaniesRoutingModule
  ]
})
export class BrowseCompaniesModule { }
