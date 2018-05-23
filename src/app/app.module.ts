import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './Components/header/header.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { HouseComponent } from './Components/house/house.component';
import { EventsComponent } from './Components/events/events.component';
import { FutureComponent } from './Components/future/future.component';
import { GroceriesComponent } from './Components/groceries/groceries.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    HouseComponent,
    EventsComponent,
    FutureComponent,
    GroceriesComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    RouterModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
