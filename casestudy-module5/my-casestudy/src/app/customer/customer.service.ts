import { Injectable } from '@angular/core';
import {Customer} from "./Customer";
import {customerDao} from "./CustomerDao";

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
  updateCustomer(customer: Customer){
    this.customers.find(element => {
      if (element.id === customer.id){
        element.name = customer.name;
        element.gender = customer.gender;
        element.idCard = customer.idCard;
        element.email = customer.email;
        element.phone = customer.phone;
        element.address = customer.address;
        element.dateOfBirth = customer.dateOfBirth;
        element.idTypeCustomer = element.idTypeCustomer;
      }
    });
  }
  deleteCustomerById(id: string){
    const customer = this.getCustomerById(id);
    if (customer !== undefined){
      this.customers.splice(this.customers.indexOf(customer), 1);
    }
  }
}
