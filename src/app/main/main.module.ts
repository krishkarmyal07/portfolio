import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { TitlebarComponent } from '../titlebar/titlebar.component';
import { TitleTabsComponent } from '../title-tabs/title-tabs.component';
import { AboutComponent } from './about/about.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProjectComponent } from './project/project.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { DefaultComponent } from './default/default.component';
import { ReadmeComponent } from './readme/readme.component';
import { FooterComponent } from '../footer/footer.component';
import { SettingComponent } from './setting/setting.component';


@NgModule({
  declarations: [
    MainComponent,
    SidebarComponent,
    FooterComponent,
    TitlebarComponent,
    TitleTabsComponent,
    AboutComponent,
    WelcomeComponent,
    ProjectComponent,
    ExperienceComponent, 
    ContactComponent,
    DefaultComponent,
    ReadmeComponent,
    SettingComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
