import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SiteLayoutComponent } from './layout/site-layout/site-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AdminHomePageComponent } from './pages/admin-home-page/admin-home-page.component';
import { AdminUserPageComponent } from './pages/admin-user-page/admin-user-page.component';
import { AdminRolePageComponent } from './pages/admin-role-page/admin-role-page.component';
import { UserCardPageComponent } from './pages/user-card-page/user-card-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
  {
    path: "",
    component: SiteLayoutComponent, 
    children: [
      { path: "", component: HomePageComponent, data: { title: "Home Page" }}, 
      { path: "about", component: AboutPageComponent, data: { title: "About Page", permissions: ["user-create","user-delete"] }},
      { path: "contact", component: ContactPageComponent, data: { title: "Contact Page" } },
    ]
  },
  {
    path: "admin",
    component: AdminLayoutComponent,
    children: [
      { path: "", component: AdminHomePageComponent, data: { title: "Admin Home Page" }},
      { path: "users", component: AdminUserPageComponent, data: { title: "Admin User Page" } },
      { path: "user-card/:id/:username", component: UserCardPageComponent }, // admin/user-detail/1/tolga
      { path: "roles", component: AdminRolePageComponent, data: { title: "Admin Role Page" } },
    ]
  },
  { path: "login", component: LoginPageComponent },
  { path: "**", component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
