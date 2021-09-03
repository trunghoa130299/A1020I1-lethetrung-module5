import { Injectable } from '@angular/core';
import {Customer} from "./Customer";
import {customerDao,} from "./CustomerDao";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers: Customer[] = customerDao;
  constructor() { }
  getAllCustomer(){
    return this.customers;
  }
  createCustomer(customer: Customer){
    this.customers.push(customer);
  }
  getCustomerById(id: string){
    return this.customers.find(customer => customer.id === id);
  }
}
