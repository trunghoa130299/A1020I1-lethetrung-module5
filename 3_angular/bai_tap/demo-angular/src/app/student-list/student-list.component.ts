import { Component, OnInit } from '@angular/core';
import {IStudent} from '../IStudent';
import {studentDao} from '../StudentDao';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: IStudent[] = studentDao;

  constructor() { }

  ngOnInit(): void {
  }

}
