import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ButtonModule } from 'primeng/button';
import { UniModule } from './components/uni.module';
import { LayoutModule } from './layout/layout.module';
import { AdminHomePageComponent } from './pages/admin-home-page/admin-home-page.component';
import { AdminUserPageComponent } from './pages/admin-user-page/admin-user-page.component';
import { AdminRolePageComponent } from './pages/admin-role-page/admin-role-page.component';
import { UserCardPageComponent } from './pages/user-card-page/user-card-page.component';
import { TableModule } from 'primeng/table';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactPageComponent,
    AboutPageComponent,
    AdminHomePageComponent,
    AdminUserPageComponent,
    AdminRolePageComponent,
    UserCardPageComponent,
    NotFoundPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    UniModule,
    LayoutModule,
    TableModule,
    HttpClientModule // HttpClient için gerekli 
  ],
  providers: [], // services are provided here
  bootstrap: [AppComponent]
})
export class AppModule { }
