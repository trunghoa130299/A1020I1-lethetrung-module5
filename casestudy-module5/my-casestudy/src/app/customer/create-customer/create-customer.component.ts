import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../customer.service";
import {Router} from "@angular/router";
import {CustomerType} from "../CustomerType";
import {CustomertypeService} from "../customertype.service";
import {Customer} from "../Customer";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  createCustomerForm: FormGroup;
  customerType: CustomerType;

  constructor(private customerService: CustomerService, private router: Router , private customertypeService: CustomertypeService) {
  }

  ngOnInit(): void {
    this.createCustomerForm = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.pattern("^(KH-)+[0-9]{4}")]),
      name: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      idCard: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern("^(090)+[0-9]{7}")]),
      address: new FormControl('', [Validators.required]),
      dateOfBirth: new FormControl('', [Validators.required]),
      idTypeCustomer: new FormControl('', [Validators.required]),
    });
    this.getAllCustomerType();
  }
  getAllCustomerType() {
    this.customertypeService.getAllCustomerType().subscribe(res => {
      this.customerType = res;
    });
  }
  compareFn(c1: Customer, c2: Customer): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
  onSubmitCustomer() {
    if (this.createCustomerForm.valid) {
      this.customerService.createCustomer(this.createCustomerForm.value).subscribe(() => {
        this.router.navigate(['/listCustomer']);
      });
    }
  }
}
