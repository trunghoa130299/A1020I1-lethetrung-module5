import { Injectable } from '@angular/core';
import {IStudent} from './IStudent';
import {studentDao} from './StudentDao';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students: IStudent[] = studentDao;

  constructor() { }
  getAllStudent(){
    return this.students;
  }
  getStudentById(id: number){
    return this.students.find(student => student.id === id);
  }
  createStudent(student: IStudent){
    this.students.push(student);
  }
}
