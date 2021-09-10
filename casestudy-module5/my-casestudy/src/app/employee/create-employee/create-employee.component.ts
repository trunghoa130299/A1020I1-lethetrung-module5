import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EmployeeService} from "../employee.service";
import {Router} from "@angular/router";
import {Education} from "../Education";
import {Division} from "../Division";
import {PositionService} from "../position.service";
import {EducationService} from "../education.service";
import {DivisionService} from "../division.service";
import {Employee} from "../Employee";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  createEmployeeForm: FormGroup;
  positionList: Position;
  educationList: Education;
  divisionList: Division;

  constructor(private employeeService: EmployeeService, private router: Router,
              private positionService: PositionService,
              private educationService: EducationService,
              private divisionService: DivisionService) {
  }

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
    this.getAllDivision();
    this.getAllEducation();
    this.getAllPosition();
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
  compareFn(c1: Employee, c2: Employee): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
  onSubmitEmployee() {
    if (this.createEmployeeForm.valid) {
      this.employeeService.createEmployee(this.createEmployeeForm.value).subscribe(() => {
        this.router.navigate(['/listEmployee']);
      });
    }
  }
}
