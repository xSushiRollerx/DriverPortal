import { Injectable } from '@angular/core';
import { Observable, ObservableInput, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  httpHeaders: HttpHeaders = new HttpHeaders({
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI5OCIsImV4cCI6MTYyODQwNDM0NiwiaWF0IjoxNjI4MDQ0MzQ2fQ.WwnYxj-VLF-TA__hnZAKwr1P5VpfjNCUbC4FDx_R2XQ'
  });

  URL = "http://localhost:8041/"

  constructor(private http: HttpClient) { }

  requestOrder(): Observable<HttpResponse<any>> {
    return this.http.get<HttpResponse<any>>(this.URL + "driver/order", { headers: this.httpHeaders, responseType: "json", observe: 'response'})
    // .pipe(catchError(this.errorHandler));
  }

  declineOrder(orderId: number): Observable<HttpResponse<any>> {
    return this.http.put<HttpResponse<any>>(this.URL + "order/" + orderId, { headers: this.httpHeaders, responseType: "json",  observe: 'response' });
  }

  acceptOrder(orderId: number) {
    return this.http.put(this.URL + "driver/99/order/" + orderId, { headers: this.httpHeaders, responseType: "json" });
  }

  private errorHandler(error: HttpErrorResponse) {
    let message;
        let status;
        if (error.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error.message);
          message = error.error.message;
          status = 400;
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
          message = error.error;
          status = error.status;
        }

        return new HttpResponse({body: message, status: status});

  }
}

