import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  private POS_API = 'http://localhost:3000/position';
  constructor(private http: HttpClient) { }

  getAllPosition(): Observable<any> {
    return this.http.get(this.POS_API);
  }
}
