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
      const param = paramMap.get('id');
      if (param != null) {
        this.id = param;
        this.customerService.getCustomerById(this.id).subscribe((data) => {
          this.customerInfor = data;
        });
      }
    });
  }

  deleteCustomer(id: string) {
    this.customerService.deleteCustomerById(id).subscribe(() => {
      this.router.navigate(['listCustomer']);
    });
  }
}
