import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {
  @Input()
  likereceive: number;

  @Output()
  changeLike = new EventEmitter<number>();
  likeThis() {
    this.likereceive = this.likereceive++;
    this.changeLike.emit(this.likereceive);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
