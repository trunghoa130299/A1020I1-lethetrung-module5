import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {EmployeeService} from "../employee.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Education} from "../Education";
import {Division} from "../Division";
import {PositionService} from "../position.service";
import {EducationService} from "../education.service";
import {DivisionService} from "../division.service";
import {Employee} from "../Employee";

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {
  viewEmployeeForm: FormGroup;
  id: string;
  positionList: Position;
  educationList: Education;
  divisionList: Division;
  constructor(private employeeService: EmployeeService, private activatedRoute: ActivatedRoute, private router: Router,
              private positionService: PositionService,
              private educationService: EducationService,
              private divisionService: DivisionService) { }

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
    this.getAllDivision();
    this.getAllEducation();
    this.getAllPosition();
    this.activatedRoute.paramMap.subscribe((paramap) => {
      this.id = paramap.get('id');
      this.employeeService.getEmployeeById(this.id).subscribe(data => {
        console.log(data);
        this.viewEmployeeForm.patchValue(data);
      });
    });
  }
  compareFn(c1: Employee, c2: Employee): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
  getAllDivision() {
    this.divisionService.getAllDivision().subscribe(res => {
      this.divisionList = res;
    });
  }

  getAllEducation() {
    this.educationService.getAllEducation().subscribe(res => {
      this.educationList = res;
    });
  }

  getAllPosition() {
    this.positionService.getAllPosition().subscribe(res => {
      this.positionList = res;
    });
  }

}
