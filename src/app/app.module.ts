import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MaterializeModule } from 'angular2-materialize';
import { InverseCharPipe } from './inverse-char.pipe';
import { ProductFilterPipe } from './product-filter.pipe';
import { MyStarRatingComponent } from './my-star-rating/my-star-rating.component';
import { MyCurrencyPipe } from './my-currency.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    InverseCharPipe,
    ProductFilterPipe,
    MyStarRatingComponent,
    MyCurrencyPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterializeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
