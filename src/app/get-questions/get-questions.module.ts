import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetQuestionsRoutingModule } from './get-questions-routing.module';
import { GetQuestionsComponent } from './get-questions.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GetQuestionsComponent
  ],
  imports: [
    CommonModule,
    GetQuestionsRoutingModule,
    ReactiveFormsModule
  ]
})
export class GetQuestionsModule { }
