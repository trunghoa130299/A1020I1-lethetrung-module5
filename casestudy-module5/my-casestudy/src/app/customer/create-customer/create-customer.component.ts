import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../customer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  createCustomerForm: FormGroup;

  constructor(private customerService: CustomerService, private router: Router) {
  }

  ngOnInit(): void {
    this.createCustomerForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
    name: new FormControl(''),
    gender: new FormControl(''),
    idCard: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    address: new FormControl(''),
    dateOfBirth: new FormControl(''),
    idTypeCustomer: new FormControl(''),
  })
    ;
  }

  createCustomer() {
    this.customerService.createCustomer(this.createCustomerForm.value);
    this.router.navigateByUrl('');
  }

}
