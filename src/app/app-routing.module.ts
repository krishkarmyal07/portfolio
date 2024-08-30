import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainModule } from './main/main.module';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "welcome",
    pathMatch: "full",
  },
  {
    path:'',
    loadChildren: () => import(`./main/main.module`).then((m)=>m.MainModule)
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  { path: '**', redirectTo: '/error'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
