import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceptionRoutingModule } from './reception-routing.module';
import { ReceptionComponent } from './reception.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ReceptionComponent
  ],
  imports: [
    CommonModule,
    ReceptionRoutingModule,
    ReactiveFormsModule
  ]
})
export class ReceptionModule { }
