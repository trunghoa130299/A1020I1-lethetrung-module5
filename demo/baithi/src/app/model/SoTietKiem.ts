import {KhachHang} from "./KhachHang";

export interface SoTietKiem {
  id: number;
  maKh: KhachHang;
  tenKh: KhachHang;
  ngayMo: string;
  tgbd: string;
  kyHan: string;
  soTien: string;
  laiSuat: string;
  uuDai: string;
}
