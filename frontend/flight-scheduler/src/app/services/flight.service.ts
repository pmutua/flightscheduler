import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Flight } from '../models/Flight';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private endpoint = ' http://127.0.0.1:8000/flights/';

  constructor(private http: HttpClient) { }


  // DELETE a Single flight
  deleteFlight(id: number): Observable<object>{
    console.log(id)
    return this.http.delete(this.endpoint+id)
  }


  // Get Single flight
  getFlight(id: number): Observable<object>{
    console.log(id)
    return this.http.get(this.endpoint+id)
  }


  // PUT update flight
  updateFlight(id: number, payload ): Observable<object>{

    return this.http.put(this.endpoint + id, payload)
  }


  // Add Flight
  flightCreate(flight: Flight ): Observable<object>{

    return this.http.post(this.endpoint,flight)
  }



  // Get All Flights
  getAllFlights(): Observable<any>{
    return this.http.get(this.endpoint)
  }



}






