import { Injectable } from '@angular/core';
import {SoTietKiem} from "../model/SoTietKiem";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SotietkiemService {
  soTietKiems: SoTietKiem[] = [];
  API_URL = 'http://localhost:3000/SoTietKiem';
  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<SoTietKiem[]> {
    return this.httpClient.get<SoTietKiem[]>(this.API_URL);
  }
  getById(id: number): Observable<SoTietKiem>{
    return this.httpClient.get<SoTietKiem>(this.API_URL + '/' + id);
  }
  searchSoTietKiem(id: number): Observable<any> {
    return this.httpClient.get(this.API_URL + '?id=' + id);
  }
  deleteSotietKiem(id: number): Observable<any> {
    return this.httpClient.delete(`${this.API_URL}/${id}`);
  }
  editSoTietKiem(soTietKiem, id): Observable<any> {
    return this.httpClient.put(this.API_URL + '/' + id, soTietKiem);
  }

}

