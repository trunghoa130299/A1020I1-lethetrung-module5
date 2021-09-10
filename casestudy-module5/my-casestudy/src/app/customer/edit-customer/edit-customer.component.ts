import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../customer.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerType} from "../CustomerType";
import {CustomertypeService} from "../customertype.service";
import {Customer} from "../Customer";

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  editCustomerForm: FormGroup;
  private id: string;
  customerType: CustomerType;
  constructor(private customerService: CustomerService, private router: Router, private activatedRoute: ActivatedRoute,
              private customertypeService: CustomertypeService) { }

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
    this.getAllCustomerType();
    this.activatedRoute.paramMap.subscribe((paramap) => {
      this.id = paramap.get('id');
      this.customerService.getCustomerById(this.id).subscribe(data => {
        console.log(data);
        this.editCustomerForm.patchValue(data);
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
  onEditCustomer() {
    if (this.editCustomerForm.valid){
      this.customerService.editCustomer(this.editCustomerForm.value, this.id).subscribe((data) => {
        this.router.navigate(['/listCustomer']);
      });
    }
  }
}
