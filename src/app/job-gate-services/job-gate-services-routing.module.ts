import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobGateServicesComponent } from './job-gate-services.component';

const routes: Routes = [{ path: '', component: JobGateServicesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobGateServicesRoutingModule { }
