import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DivisionService {
  readonly DVS_API = 'http://localhost:3000/division';
  constructor(private httpClient: HttpClient) { }
  getAllDivision(): Observable<any> {
    return this.httpClient.get(this.DVS_API);
  }
}
