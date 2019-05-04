import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Nav1Component } from 'src/app/nav1/nav1.component';
import { Nav2Component } from 'src/app/nav2/nav2.component';

const routes: Routes = [
  {path:'',component:Nav1Component,  pathMatch:'full'},
  {path:'nav1', component:Nav1Component},
  {path:'nav2', component:Nav2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
