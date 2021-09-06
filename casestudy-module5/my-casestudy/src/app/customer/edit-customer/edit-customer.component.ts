import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../customer.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Customer} from "../Customer";

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  editCustomerForm: FormGroup;
  customerInfor: Customer;
  private id: string;

  constructor(private customerService: CustomerService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.editCustomerForm = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.pattern("^(KH-)+[0-9]{4}")]),
      name: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      idCard: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern("^(090)+[0-9]{7}")]),
      address: new FormControl('', [Validators.required]),
      dateOfBirth: new FormControl('', [Validators.required]),
      idTypeCustomer: new FormControl('', [Validators.required]),
    });
    this.activatedRoute.paramMap.subscribe((paramap) => {
      this.id = paramap.get('id');
      this.customerInfor = this.customerService.getCustomerById(this.id);
      this.editCustomerForm.patchValue(this.customerInfor);
    });
  }

  onEditCustomer() {
    if (this.editCustomerForm.valid){
      this.customerService.updateCustomer(this.editCustomerForm.value);
      this.router.navigate(['/listCustomer']);
    }
  }
}