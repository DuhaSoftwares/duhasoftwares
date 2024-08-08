import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { WebsiteComponent } from './website.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './internal/header/header.component';
import { NavBarComponent } from './internal/nav-bar/nav-bar.component';
import { FooterComponent } from './internal/footer/footer.component';


@NgModule({
  declarations: [
    WebsiteComponent,
    HomeComponent,
    HeaderComponent,
    NavBarComponent,
    AboutUsComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class WebsiteModule { }
