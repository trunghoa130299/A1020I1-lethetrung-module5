import { Component, OnInit } from '@angular/core';
import {Customer} from "./Customer";
import {CustomerService} from "./customer.service";


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  listCustomer: Customer[] = [];
  customer: Customer;
  id: string;
  term: any;
  p: any;
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getAllCustomer().subscribe((data) => {
      this.listCustomer = data;
    }, () => {
      console.log('loi xay ra');
      }, () => {
      console.log('complete');
      }
    );
  }

}
