import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css'],
})
export class ZippyComponent implements OnInit {
  isExpanded: boolean;
  @Input('title') title!: string;
  constructor() {
    this.isExpanded = true;
  }
  onExpanded() {
    this.isExpanded = !this.isExpanded;
  }

  ngOnInit(): void {}
}
