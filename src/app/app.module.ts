import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MaterializeModule } from 'angular2-materialize';
import { InverseCharPipe } from './inverse-char.pipe';
import { ProductFilterPipe } from './product-filter.pipe';
import { StarRatingModule } from 'angular-star-rating';
import { MyStarRatingComponent } from './my-star-rating/my-star-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    InverseCharPipe,
    ProductFilterPipe,
    MyStarRatingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterializeModule,
    StarRatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
