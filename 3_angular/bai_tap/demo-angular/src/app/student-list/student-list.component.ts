import { Component, OnInit } from '@angular/core';
import {IStudent} from '../IStudent';
import {studentDao} from '../StudentDao';
import {StudentService} from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: IStudent[] = studentDao;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.students = this.studentService.getAllStudent();
  }

}
