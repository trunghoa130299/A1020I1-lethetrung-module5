import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {KhachHang} from "../../model/KhachHang";
import {SotietkiemService} from "../../service/sotietkiem.service";
import {ActivatedRoute, Router} from "@angular/router";
import {KhachhangService} from "../../service/khachhang.service";
import {SoTietKiem} from "../../model/SoTietKiem";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editForm: FormGroup;
  idSo: number;
  khachHangList: KhachHang;

  constructor(private sotietkiemService: SotietkiemService, private router: Router, private activatedRoute: ActivatedRoute,
              private khachhangService: KhachhangService) { }

  ngOnInit(): void {
    this.editForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      maKh: new FormControl('', [Validators.required]),
      tenKh: new FormControl('', [Validators.required]),
      ngayMo: new FormControl('', [Validators.required]),
      tgbd: new FormControl('', [Validators.required]),
      kyHan: new FormControl('', [Validators.required]),
      soTien: new FormControl('', [Validators.required,  Validators.min(100000000)]),
      laiSuat: new FormControl('', [Validators.required]),
      uuDai: new FormControl('', [Validators.required]),
    });
    this.getAllKhachHang();
    this.activatedRoute.paramMap.subscribe((paramap) => {
      this.idSo = Number(paramap.get('id'));
      this.sotietkiemService.getById(this.idSo).subscribe(data => {
        console.log(data);
        this.editForm.patchValue(data);
      });
    });
  }
  compareFn(c1: SoTietKiem, c2: SoTietKiem): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
  editSubmit() {
    if (this.editForm.valid){
      this.sotietkiemService.editSoTietKiem(this.editForm.value, this.idSo).subscribe((data) => {
        this.router.navigate(['/']);
      });
    }
  }

  private getAllKhachHang() {
    this.khachhangService.getAll().subscribe(res => {
      this.khachHangList = res;
    });
  }
}
