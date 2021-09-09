import { Component, OnInit } from '@angular/core';
import {Employee} from "../Employee";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {EmployeeService} from "../employee.service";

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {
  employee: Employee;
  id: string;
  constructor(private employeeService: EmployeeService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const param = paramMap.get('id');
      if (param != null) {
        this.id = param;
        this.employeeService.getEmployeeById(this.id).subscribe((data) => {
          this.employee = data;
        });
      }
    });
  }

  deleteEmployee(id: string) {
    this.employeeService.deleteCustomerById(id).subscribe(() => {
      this.router.navigate(['listEmployee']);
    });
  }
}
