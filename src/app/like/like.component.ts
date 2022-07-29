import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'],
})
export class LikeComponent {
  @Input('isActive') isActive!: boolean;
  @Input('counts') counts!: number;

  onClick() {
    this.counts += this.isActive ? -1 : 1;
    this.isActive = !this.isActive;
  }
}
