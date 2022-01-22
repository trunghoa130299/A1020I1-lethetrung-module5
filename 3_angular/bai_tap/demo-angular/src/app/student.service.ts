import { Injectable } from '@angular/core';
import {IStudent} from './IStudent';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students: IStudent[] = [];
  API_URL = 'http://localhost:3000/students';
  constructor(private httpClient: HttpClient) { }
  getAllStudent(): Observable<IStudent[]> {
    return this.httpClient.get<IStudent[]>(this.API_URL);
  }
  getStudentById(id: number): Observable<any>{
    return this.httpClient.get<any>(this.API_URL + '/' + id);
  }
  createStudent(student: IStudent): Observable<IStudent>{
    return this.httpClient.post<IStudent>(this.API_URL, student);
  }
  searchStudent(name: string): Observable<any> {
    return this.httpClient.get(this.API_URL + '?name_like=' + name);
  }
  deleteStudent(id: number): Observable<any> {
    return this.httpClient.delete(`${this.API_URL}/${id}`);
  }
}
