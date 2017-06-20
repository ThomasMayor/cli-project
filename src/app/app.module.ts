import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { DecimalPipe } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MaterializeModule } from 'angular2-materialize';
import { InverseCharPipe } from './inverse-char.pipe';
import { ProductFilterPipe } from './product-filter.pipe';
import { MyStarRatingComponent } from './my-star-rating/my-star-rating.component';
import { MyCurrencyPipe } from './my-currency.pipe';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

import { APP_ROUTES } from './app.routes';
import { ProductService } from './product.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    InverseCharPipe,
    ProductFilterPipe,
    MyStarRatingComponent,
    MyCurrencyPipe,
    WelcomeComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterializeModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES),
  ],
  providers: [DecimalPipe, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
