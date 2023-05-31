import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FriendListRoutingModule } from './friend-list-routing.module';
import { FriendListComponent } from './friend-list.component';


@NgModule({
  declarations: [
    FriendListComponent
  ],
  imports: [
    CommonModule,
    FriendListRoutingModule
  ]
})
export class FriendListModule { }
