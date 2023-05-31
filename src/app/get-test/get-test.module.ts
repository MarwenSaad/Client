import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetTestRoutingModule } from './get-test-routing.module';
import { GetTestComponent } from './get-test.component';


@NgModule({
  declarations: [
    GetTestComponent
  ],
  imports: [
    CommonModule,
    GetTestRoutingModule
  ]
})
export class GetTestModule { }
