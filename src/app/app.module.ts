import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlockButtonComponent } from './components/block-button/block-button.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SelectorComponent } from './components/selector/selector.component';


@NgModule({
  declarations: [
    AppComponent,
    BlockButtonComponent,
    HomePageComponent,
    ContactPageComponent,
    AboutPageComponent,
    SelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], // services are provided here
  bootstrap: [AppComponent]
})
export class AppModule { }
