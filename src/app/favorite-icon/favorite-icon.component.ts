import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-icon',
  templateUrl: './favorite-icon.component.html',
  styleUrls: ['./favorite-icon.component.css']
})
export class FavoriteIconComponent implements OnInit {
  isFavorite:boolean;
  noOfLikes:number;
  constructor() { 
    this.isFavorite=false;
    this.noOfLikes=10;
  }
  onClick(){
    this.isFavorite=!this.isFavorite;
    this.isFavorite?this.noOfLikes++ : this.noOfLikes--;
  }
  ngOnInit(): void {
  }

}
