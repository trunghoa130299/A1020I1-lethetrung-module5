import { Component, OnInit } from '@angular/core';
import {Customer} from "./Customer";
import {customerDao,} from "./CustomerDao";
import {CustomerService} from "./customer.service";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  listCustomer: Customer[] = customerDao;
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getAllCustomer();
  }

}
