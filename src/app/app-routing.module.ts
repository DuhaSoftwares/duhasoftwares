import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'',redirectTo:'web',pathMatch:"full"},
  { path: 'web', loadChildren: () => import('./main/website/website.module').then(m => m.WebsiteModule) },
  { path: 'super', loadChildren: () => import('./main/super-admin/super-admin.module').then(m => m.SuperAdminModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking',
    useHash: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
