import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { IProduct } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  inputs : ['product'],
  providers: [Location]
})
export class ProductDetailComponent implements OnInit {

  public product: IProduct;
  public errorMessage: string;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.productService.getProduct(+params['id']))
      .subscribe(
        product => this.product = product,
        error => { console.log('PRODUCT ERROR ', error); this.errorMessage = error; }
      );
  }

  onRatingChange(product, rating) {
    let newProduct = Object.assign({}, product, {starRating: rating});
    this.productService.putProduct(newProduct).subscribe(product => console.log('Product saved'));
  }

}
