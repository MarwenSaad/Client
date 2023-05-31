import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanySignUpComponent } from './company-sign-up.component';

const routes: Routes = [{ path: '', component: CompanySignUpComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanySignUpRoutingModule { }
