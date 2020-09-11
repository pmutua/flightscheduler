import { FlightService } from './../services/flight.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../models/Flight';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {

  flights: Observable<Flight[]>

  success: boolean = false;

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {

    this.loadFlightsData();


  }

  loadFlightsData(){

    this.flights = this.flightService.getAllFlights();

  }

  onClickDeleteFlight(id){

    this.flightService.deleteFlight(id)
      .subscribe(
        data => {
          this.success = true;
          this.loadFlightsData();
        }
      );

  }

}
