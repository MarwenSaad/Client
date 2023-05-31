import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicProfileAboutComponent } from './public-profile-about.component';

const routes: Routes = [{ path: '', component: PublicProfileAboutComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicProfileAboutRoutingModule { }
