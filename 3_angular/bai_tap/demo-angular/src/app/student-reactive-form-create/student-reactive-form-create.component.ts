import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {studentDao} from '../StudentDao';

@Component({
  selector: 'app-student-reactive-form-create',
  templateUrl: './student-reactive-form-create.component.html',
  styleUrls: ['./student-reactive-form-create.component.css']
})
export class StudentReactiveFormCreateComponent implements OnInit {
  createStudent: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.createStudent = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.min(5)]),
      name: new FormControl(''),
      age: new FormControl(''),
      address: new FormControl(''),
      mark: new FormControl(''),
      avatar: new FormControl('')
    });
  }

  createStudentForm() {
    studentDao.push(this.createStudent.value);
  }
}
