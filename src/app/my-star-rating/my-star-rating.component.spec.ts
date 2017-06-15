import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyStarRatingComponent } from './my-star-rating.component';

describe('MyStarRatingComponent', () => {
  let component: MyStarRatingComponent;
  let fixture: ComponentFixture<MyStarRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyStarRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyStarRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
