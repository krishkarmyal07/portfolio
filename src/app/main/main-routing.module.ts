import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProjectComponent } from './project/project.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { DefaultComponent } from './default/default.component';
import { ReadmeComponent } from './readme/readme.component';
import { SettingComponent } from './setting/setting.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "main",
    pathMatch: "full",
  },
  {
    path: "",
    component: MainComponent,
    children:[
      {
        path:"home",
        component:HomeComponent
      },
      {
        path:"about",
        component:AboutComponent
      },
      {
        path:"welcome",
        component:WelcomeComponent
      },
      {
        path:"project",
        component:ProjectComponent
      },
      {
        path:"experience",
        component: ExperienceComponent
      },
      {
        path:"contact",
        component:ContactComponent
      },
      {
        path:"default",
        component:DefaultComponent
      },
      {
        path:"readme",
        component:ReadmeComponent
      },
      {
        path:"settings",
        component:SettingComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
