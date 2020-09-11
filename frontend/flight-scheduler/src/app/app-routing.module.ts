import { DashboardComponent } from './dashboard/dashboard.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightCreateComponent } from './flight-create/flight-create.component';


const routes: Routes = [
  {path: '', redirectTo: 'flights', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'flights', component: FlightListComponent},
  {path: 'add-flight', component: FlightCreateComponent},
  {path: 'edit-flight/:id', component: FlightEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
