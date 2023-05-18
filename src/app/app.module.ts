import { LOCALE_ID, NgModule } from '@angular/core';
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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { registerLocaleData } from '@angular/common';
import localeTr from '@angular/common/locales/tr';
import localeFr from '@angular/common/locales/fr';
import { HttpProtocolPipe } from './pipes/http-protocol.pipe';


registerLocaleData(localeTr, 'tr');
registerLocaleData(localeFr, 'fr');

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
    LoginPageComponent,
    HttpProtocolPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    UniModule,
    LayoutModule,
    TableModule,
    HttpClientModule, // HttpClient için gerekli 
    ReactiveFormsModule, // Reactive Forms için gerekli
    PanelModule,
    InputTextModule,
    PasswordModule,
    BrowserAnimationsModule,
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, // interceptor'ı kullanabilmek için gerekli
      useClass: TokenInterceptor,
      multi: true 
    },
    {
      provide: LOCALE_ID,
      useValue: 'tr'
    }
  ], // services are provided here
  bootstrap: [AppComponent]
})
export class AppModule { }
