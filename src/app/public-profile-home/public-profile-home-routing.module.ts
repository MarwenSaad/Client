import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicProfileHomeComponent } from './public-profile-home.component';

const routes: Routes = [{ path: '', component: PublicProfileHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicProfileHomeRoutingModule { }
