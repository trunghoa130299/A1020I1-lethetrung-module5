import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private EDU_API = 'http://localhost:3000/educationDegree';

  constructor(private http: HttpClient) {
  }

  getAllEducation(): Observable<any> {
    return this.http.get(this.EDU_API);

  }
}
