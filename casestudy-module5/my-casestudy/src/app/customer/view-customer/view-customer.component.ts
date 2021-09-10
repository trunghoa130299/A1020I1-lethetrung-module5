import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Customer} from "../Customer";
import {CustomerService} from "../customer.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerType} from "../CustomerType";
import {CustomertypeService} from "../customertype.service";

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {
  viewCustomerForm: FormGroup;
  private id: string;
  customerType: CustomerType;
  constructor(private customerService: CustomerService, private router: Router, private activatedRoute: ActivatedRoute,
              private customertypeService: CustomertypeService) {
  }

  ngOnInit(): void {
    this.viewCustomerForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      gender: new FormControl(''),
      idCard: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      address: new FormControl(''),
      dateOfBirth: new FormControl(''),
      idTypeCustomer: new FormControl(''),
    });
    this.getAllCustomerType();
    this.activatedRoute.paramMap.subscribe((paramap) => {
      this.id = paramap.get('id');
      this.customerService.getCustomerById(this.id).subscribe(data => {
        console.log(data);
        this.viewCustomerForm.patchValue(data);
      });
    });
  }

  getAllCustomerType() {
    this.customertypeService.getAllCustomerType().subscribe(res => {
      this.customerType = res;
    });
  }

  compareFn(c1: Customer, c2: Customer): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
}
