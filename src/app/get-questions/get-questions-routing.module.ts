import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetQuestionsComponent } from './get-questions.component';

const routes: Routes = [{ path: '', component: GetQuestionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GetQuestionsRoutingModule { }
