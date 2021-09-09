import { Component, OnInit } from '@angular/core';
import {Employee} from "./Employee";
import {employeeDao} from "./EmployeeDao";
import {EmployeeService} from "./employee.service";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeeList: Employee[] = [];
  term: any;
  p: any;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getAll().subscribe((data) => {
      this.employeeList = data;
    }, () => {
      console.log('loi');
    }, () => {
      console.log('complete');
    });
  }

}
