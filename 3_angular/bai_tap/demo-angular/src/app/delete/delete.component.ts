import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {StudentService} from '../student.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  id: number;
  studentName = '';
  constructor(public dialog: MatDialogRef<DeleteComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
              public studentService: StudentService) {
  }

  ngOnInit(): void {
    this.id = this.data.idStudent;
    this.studentName = this.data.nameStudent;
  }

  close() {
    this.dialog.close();
  }

  delete() {
    this.studentService.deleteStudent(this.id).subscribe(() => {
      this.dialog.close();
    });
  }
}
