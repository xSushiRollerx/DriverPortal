import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Driver } from '../account-component/models/driver';

@Injectable({
  providedIn: 'root'
})
export class DriverHttpService {

  constructor(private http: HttpClient) {
  }

  readDriver(userId: string): Observable<Driver> {
    return this.http.get('http://localhost:8080/users/driver/'+userId);
  }
}