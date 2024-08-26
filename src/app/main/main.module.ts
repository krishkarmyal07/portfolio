import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { TitlebarComponent } from '../titlebar/titlebar.component';
import { TitleTabsComponent } from '../title-tabs/title-tabs.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    SidebarComponent,
    TitlebarComponent,
    TitleTabsComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
