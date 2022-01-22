import { Component, OnInit } from '@angular/core';
import {SoTietKiem} from "../../model/SoTietKiem";
import {SotietkiemService} from "../../service/sotietkiem.service";
import {MatDialog} from "@angular/material/dialog";
import {DeleteComponent} from "../delete/delete.component";
import {KhachhangService} from "../../service/khachhang.service";
import {KhachHang} from "../../model/KhachHang";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  soTietKiem: SoTietKiem[] = [];
  nameSearch: number;
  khachHangList: KhachHang;

  constructor(private sotietkiemService: SotietkiemService, private dialog: MatDialog, private khachhangService: KhachhangService) { }

  ngOnInit(): void {
    this.sotietkiemService.getAll().subscribe(
      (data) => {
        this.soTietKiem = data;
      }, () => {
        console.log('loi xay ra');
      }, () => {
        console.log('complete');
      });
    this.getAllKhachHang();
  }
  compareFn(c1: SoTietKiem, c2: SoTietKiem): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
  private getAllKhachHang() {
    this.khachhangService.getAll().subscribe(res => {
      this.khachHangList = res;
    });
  }
  delete(idSo: number) {
    const dialog = this.dialog.open(DeleteComponent , {
      width: '350px',
      height: '250px',
      data: {idSoTietKiem : idSo}
    });
    dialog.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
  }

  search() {
    if (this.nameSearch == null) {
      this.ngOnInit();
    }else {
      this.sotietkiemService.searchSoTietKiem(this.nameSearch).subscribe( res => {
        this.soTietKiem = res;
      });
    }
  }
}
