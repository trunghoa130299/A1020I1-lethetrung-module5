import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {KhachHang} from "../model/KhachHang";

@Injectable({
  providedIn: 'root'
})
export class KhachhangService {
  khachhang: KhachHang[] = [];
  API_URL = 'http://localhost:3000/KhachHang';
  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<any> {
    return this.httpClient.get(this.API_URL);
  }
}
