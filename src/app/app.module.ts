import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {  ROUTING } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ReviewComponent } from './review/review.component';
import { FqAskComponent } from './fq-ask/fq-ask.component';
import { FooterComponent } from './footer/footer.component';
import { YoutubeVideoComponent } from './youtube-video/youtube-video.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    NavbarComponent,
    HomeComponent,
    ContactUsComponent,
    ReviewComponent,
    FqAskComponent,
    FooterComponent,
    YoutubeVideoComponent
  ],
  imports: [
    BrowserModule,
    ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
