import { Injectable } from '@angular/core';

import {Employee} from "./Employee";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees: Employee[] = [];
  readonly API_URL = 'http://localhost:3000/employees';
  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.API_URL);
  }
  createEmployee(employee: Employee): Observable<any> {
    return this.httpClient.post<any>(this.API_URL, employee);
  }

  getEmployeeById(id: string): Observable<Employee> {
    return this.httpClient.get<Employee>(this.API_URL + '/' + id);
  }

  editEmployee(employee, id): Observable<any> {
    return this.httpClient.put(this.API_URL + '/' + id, employee);
  }

  deleteCustomerById(id: string): Observable<Employee> {
    return this.httpClient.delete<Employee>(this.API_URL + '/' + id);
  }
}
