import {Component, OnInit} from '@angular/core';
import {IStudent} from '../IStudent';
import {StudentService} from '../student.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-student-information',
  templateUrl: './student-information.component.html',
  styleUrls: ['./student-information.component.css']
})
export class StudentInformationComponent implements OnInit {
  studentInformation: IStudent ;
  id: number;

  constructor(private studentService: StudentService, private activeRouter: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe((param) => {
      this.id = Number(param.get('id'));
      this.studentInformation = this.studentService.getStudentById(this.id);
    });
  }
  changeMark(mark: number){
    this.studentInformation.mark = mark;
  }

}
