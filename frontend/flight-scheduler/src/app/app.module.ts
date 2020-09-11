import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';
import { HttpHeaders, HttpClient, HttpClientModule } from '@angular/common/http';
import { FlightListComponent } from './flight-list/flight-list.component';
import { FlightCreateComponent } from './flight-create/flight-create.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    FlightListComponent,
    FlightCreateComponent,
    FlightEditComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
