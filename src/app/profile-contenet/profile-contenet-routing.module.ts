import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileContenetComponent } from './profile-contenet.component';

const routes: Routes = [{ path: '', component: ProfileContenetComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileContenetRoutingModule { }
