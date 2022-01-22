import { Component, OnInit } from '@angular/core';
import {IStudent} from '../IStudent';
import {StudentService} from '../student.service';
import {MatDialog} from '@angular/material/dialog';
import {DeleteComponent} from '../delete/delete.component';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: IStudent[] = [];
  nameSearch = '';

  constructor(private studentService: StudentService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.studentService.getAllStudent().subscribe(
      (data) => {
        this.students = data;
    }, () => {
        console.log('loi xay ra');
      }, () => {
        console.log('complete');
      });
  }

  search() {
    if (this.nameSearch === '') {
      this.ngOnInit();
    }else {
      this.studentService.searchStudent(this.nameSearch).subscribe( res => {
        this.students = res;
      });
    }
  }

  delete(id: number , name: string) {
    const dialog = this.dialog.open(DeleteComponent , {
      width: '350px',
      height: '250px',
      data: {idStudent : id, nameStudent: name}
    });
    dialog.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
    }
}
