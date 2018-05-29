import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { EventsComponent } from './Components/events/events.component';
import { GroceriesComponent } from './Components/groceries/groceries.component';
import { FutureComponent } from './Components/future/future.component';
import { HouseComponent } from './Components/house/house.component';
import { ApiComponent } from './Components/api/api.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'events', component: EventsComponent },
  { path: 'groceries', component: GroceriesComponent },
  { path: 'future', component: FutureComponent },
  { path: 'house', component: HouseComponent },
  { path: 'api', component: ApiComponent },
];


@NgModule({
  imports: [
     RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
