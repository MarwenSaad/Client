import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpontaniousApplicationRoutingModule } from './spontanious-application-routing.module';
import { SpontaniousApplicationComponent } from './spontanious-application.component';


@NgModule({
  declarations: [
    SpontaniousApplicationComponent
  ],
  imports: [
    CommonModule,
    SpontaniousApplicationRoutingModule
  ]
})
export class SpontaniousApplicationModule { }
