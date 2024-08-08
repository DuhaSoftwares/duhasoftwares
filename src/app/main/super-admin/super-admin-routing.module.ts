import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperAdminComponent } from './super-admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlogsComponent } from './blogs/blogs.component';
import { NewsComponent } from './news/news.component';
import { LoginComponent } from './auth/login/login.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: '',
    component: SuperAdminComponent,
    children: [
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'blogs', component: BlogsComponent },
      { path: 'news', component: NewsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminRoutingModule { }
