import { Component, OnInit } from '@angular/core';
import {Customer} from "../Customer";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {CustomerService} from "../customer.service";

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {
  customerInfor: Customer;
  id: string;

  constructor(private activatedRoute: ActivatedRoute, private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      console.log(paramMap.get('id'));
      this.customerInfor = this.customerService.getCustomerById(this.id);
    });
  }
  deleteCustomer(id: string) {
    const customer = this.customerService.getCustomerById(id);
    if (customer !== undefined){
      this.customerService.deleteCustomerById(id);
      this.router.navigate(['listCustomer']);
    }
  }

}
