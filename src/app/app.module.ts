import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {  ROUTING } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ReviewComponent } from './review/review.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    NavbarComponent,
    HomeComponent,
    ContactUsComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
