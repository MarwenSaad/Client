import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetTestComponent } from './get-test.component';

const routes: Routes = [{ path: '', component: GetTestComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GetTestRoutingModule { }
