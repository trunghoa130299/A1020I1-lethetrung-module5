import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomertypeService {
  private TYPE_API = 'http://localhost:3000/idTypeCustomer';
  constructor(private http: HttpClient) { }

  getAllCustomerType(): Observable<any> {
    return this.http.get(this.TYPE_API);
  }
}
