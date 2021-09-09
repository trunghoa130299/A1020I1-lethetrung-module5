import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeeService} from "../employee.service";

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  createEmployeeForm: FormGroup;
  id: string;

  constructor(private employeeService: EmployeeService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.createEmployeeForm = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.pattern("^(NV-)+[0-9]{4}")]),
      name: new FormControl('', [Validators.required]),
      idCard: new FormControl('', [Validators.required]),
      salary: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern("^(090)+[0-9]{7}")]),
      address: new FormControl('', [Validators.required]),
      dateOfBirth: new FormControl('', [Validators.required]),
      position: new FormControl('', [Validators.required]),
      educationDegree: new FormControl('', [Validators.required]),
      division: new FormControl('', [Validators.required]),
    });
    this.activatedRoute.paramMap.subscribe((paramap) => {
      this.id = paramap.get('id');
      this.employeeService.getEmployeeById(this.id).subscribe(data => {
        console.log(data);
        this.createEmployeeForm.patchValue(data);
      });
    });
  }

  onSubmitEmployee() {
    if (this.createEmployeeForm.valid){
      this.employeeService.editEmployee(this.createEmployeeForm.value, this.id).subscribe((data) => {
        this.router.navigate(['/listEmployee']);
      });
    }
  }
}
