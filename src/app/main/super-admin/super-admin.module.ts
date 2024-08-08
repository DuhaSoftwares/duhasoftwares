import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperAdminRoutingModule } from './super-admin-routing.module';
import { SuperAdminComponent } from './super-admin.component';
import { SuperTopNavComponent } from './internal/super-top-nav/super-top-nav.component';
import { SuperSideNavComponent } from './internal/super-side-nav/super-side-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlogsComponent } from './blogs/blogs.component';
import { NewsComponent } from './news/news.component';
import { LoginComponent } from './auth/login/login.component';


@NgModule({
  declarations: [
    SuperAdminComponent,
    SuperTopNavComponent,
    SuperSideNavComponent,
    DashboardComponent,
    BlogsComponent,
    NewsComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    SuperAdminRoutingModule
  ]
})
export class SuperAdminModule { }
