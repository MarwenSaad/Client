import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanySpontaniousApplicationRoutingModule } from './company-spontanious-application-routing.module';
import { CompanySpontaniousApplicationComponent } from './company-spontanious-application.component';


@NgModule({
  declarations: [
    CompanySpontaniousApplicationComponent
  ],
  imports: [
    CommonModule,
    CompanySpontaniousApplicationRoutingModule
  ]
})
export class CompanySpontaniousApplicationModule { }
