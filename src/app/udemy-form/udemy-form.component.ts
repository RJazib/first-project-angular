import { Component } from '@angular/core';

@Component({
  selector: 'app-udemy-form',
  templateUrl: './udemy-form.component.html',
  styleUrls: ['./udemy-form.component.css'],
})
export class UdemyFormComponent {
  categories;
  constructor() {
    this.categories = [
      { id: 1, name: 'Development' },
      { id: 2, name: 'Art' },
      { id: 3, name: 'Languages' },
    ];
  }
}
