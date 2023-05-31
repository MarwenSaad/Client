import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanySpontaniousApplicationComponent } from './company-spontanious-application.component';

const routes: Routes = [{ path: '', component: CompanySpontaniousApplicationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanySpontaniousApplicationRoutingModule { }
