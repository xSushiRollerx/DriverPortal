import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  httpHeaders: HttpHeaders = new HttpHeaders({
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI5OCIsImV4cCI6MTYyNjgwMjY5OCwiaWF0IjoxNjI2NDQyNjk4fQ.bxRSBIO3V6X-a5dbjaH8j4zrW6x_35IbBVzNvyVmJ6E'
  });

  URL = "http://localhost:8041/"

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    console.log(error.status);
    return throwError(
      error
    )
  }
  

  requestOrder(): Observable<HttpResponse<Order>> {
    console.log("Im running");
    return this.http.get<HttpResponse<Order>>(this.URL + "driver/order", { headers: this.httpHeaders, responseType: "json" }).pipe(
     catchError(this.handleError));
  }
}

export interface Order {
  name: string;
}
