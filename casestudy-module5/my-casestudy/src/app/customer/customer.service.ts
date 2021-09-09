import {Injectable} from '@angular/core';
import {Customer} from "./Customer";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  customers: Customer[] = [];
  readonly API_URL = 'http://localhost:3000/customers';

  constructor(private httpClient: HttpClient) {
  }

  getAllCustomer(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.API_URL);
  }

  createCustomer(customer: Customer): Observable<any> {
    return this.httpClient.post<any>(this.API_URL, customer);
  }

  getCustomerById(id: string): Observable<Customer> {
    return this.httpClient.get<Customer>(this.API_URL + '/' + id);
  }

  editCustomer(customer, id): Observable<any> {
    return this.httpClient.put(this.API_URL + '/' + id, customer);
  }

  deleteCustomerById(id: string): Observable<Customer> {
    return this.httpClient.delete<Customer>(this.API_URL + '/' + id);
  }
}
