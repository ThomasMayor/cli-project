import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-star-rating',
  templateUrl: './my-star-rating.component.html',
  styleUrls: ['./my-star-rating.component.css'],
  inputs : ['rating']
})
export class MyStarRatingComponent implements OnInit {
  public rating:number

  constructor() { 
    console.log('MyStarRatingComponent ctor', this.rating);
  }

  ngOnInit() {
    console.log('MyStarRatingComponent', this.rating);
  }

}
