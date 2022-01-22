import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {SotietkiemService} from "../../service/sotietkiem.service";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  name = '';
  id: number;
  constructor( public dialog: MatDialogRef<DeleteComponent>,
               @Inject(MAT_DIALOG_DATA) public data: any, public sotietkiemService: SotietkiemService) { }

  ngOnInit(): void {
      this.id = this.data.idSoTietKiem;
  }

  close() {
    this.dialog.close();
  }

  delete() {
    this.sotietkiemService.deleteSotietKiem(this.id).subscribe(() => {
      this.dialog.close();
    });
  }

}
