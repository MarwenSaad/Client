import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanySignUpRoutingModule } from './company-sign-up-routing.module';
import { CompanySignUpComponent } from './company-sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CompanySignUpComponent
  ],
  imports: [
    CommonModule,
    CompanySignUpRoutingModule,
    ReactiveFormsModule
  ]
})
export class CompanySignUpModule { }
