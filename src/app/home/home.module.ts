import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavBarComponent } from '../Components/nav-bar/nav-bar.component';
import { FooterComponent } from '../Components/footer/footer.component';
import { LayoutComponent } from '../Components/layout/layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChatBarComponent } from '../Components/chat-bar/chat-bar.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavBarComponent,
    LayoutComponent,
    FooterComponent,
    ChatBarComponent

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ]
})
export class HomeModule { }
