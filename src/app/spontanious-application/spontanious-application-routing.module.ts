import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpontaniousApplicationComponent } from './spontanious-application.component';

const routes: Routes = [{ path: '', component: SpontaniousApplicationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpontaniousApplicationRoutingModule { }
