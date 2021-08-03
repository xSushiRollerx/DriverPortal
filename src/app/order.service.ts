import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  httpHeaders: HttpHeaders = new HttpHeaders({
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI5OSIsImV4cCI6MTYyODM3Mjk4OSwiaWF0IjoxNjI4MDEyOTg5fQ.N1xTbQH3teBQgAoA2JFEabK_FohmGneK_aVWYMyBIFY'
  });

  URL = "http://localhost:8041/"

  constructor(private http: HttpClient) { }

  requestOrder() {
    return this.http.get(this.URL + "driver/order", { headers: this.httpHeaders, responseType: "json" });
  }

  declineOrder(orderId: number) {
    return this.http.put(this.URL + "order/" + orderId, { headers: this.httpHeaders, responseType: "json" });
  }

  acceptOrder(orderId: number) {
    return this.http.put(this.URL + "driver/99/order/" + orderId, { headers: this.httpHeaders, responseType: "json" });
  }
}

export interface Order {
  name: string;
}
