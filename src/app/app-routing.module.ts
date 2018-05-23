import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent }
];


@NgModule({
  imports: [
     RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
