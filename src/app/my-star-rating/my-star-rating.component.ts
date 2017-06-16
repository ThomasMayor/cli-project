import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-star-rating',
  templateUrl: './my-star-rating.component.html',
  styleUrls: ['./my-star-rating.component.css'],
  inputs : ['rating'],
  outputs : ['ratingChange'],
})
export class MyStarRatingComponent implements OnInit {
  public rating:number;
  public hover:number;
  public ratingChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() { 
    console.log('MyStarRatingComponent ctor');
    this.hover = -1;
  }

  ngOnInit() {
    console.log('MyStarRatingComponent', this.rating);
  }

  onMouseOver(index: number) {
    this.hover = index;
  }

  onMouseOut() {
    this.hover = -1;
  }

  onStarClick(index: number) {
    this.ratingChange.emit(index + 1);
  }

}
