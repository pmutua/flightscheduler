import { FlightService } from './../services/flight.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Flight } from '../models/Flight';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css']
})
export class FlightEditComponent implements OnInit {

  flight: any;
  flight_id: number;
  success: boolean = false;
  trip_types = ["One Way","Round Trip", "Multiple Destinations"];

  constructor(
    private flightService: FlightService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(
      params=> {
        console.log('---------Get Params----------')
        console.log(Number(params.get("id")))
        this.flight_id = Number(params.get("id"))
      }
    );
    this.loadFlightData();
  }

  loadFlightData(){

    this.flightService.getFlight(this.flight_id)
      .subscribe(
        data => {
          console.log(data)
          this.flight = data;
        }
      );
  }

  updateFlight(){
    this.flightService.updateFlight(this.flight_id,this.flight)
      .subscribe(
        data => {
          this.flight = data as Observable<Flight>;
          this.success = true;
        },
        error=>{
          console.log("cannot update!")
        }
      )
  }

  onSubmit(){
    this.updateFlight();
  }

}
