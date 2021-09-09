import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {EmployeeService} from "../employee.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {
  viewEmployeeForm: FormGroup;
  id: string;
  constructor(private employeeService: EmployeeService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.viewEmployeeForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      gender: new FormControl(''),
      idCard: new FormControl(''),
      email: new FormControl(''),
      phoneNumber: new FormControl(''),
      address: new FormControl(''),
      dateOfBirth: new FormControl(''),
      division: new FormControl(''),
      salary: new FormControl(''),
      educationDegree: new FormControl(''),
      position: new FormControl(''),
    });
    this.activatedRoute.paramMap.subscribe((paramap) => {
      this.id = paramap.get('id');
      this.employeeService.getEmployeeById(this.id).subscribe(data => {
        console.log(data);
        this.viewEmployeeForm.patchValue(data);
      });
    });
  }

}
