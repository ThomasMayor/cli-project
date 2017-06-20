import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { ProductService } from '../product.service';
import { IProduct } from '../product';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public showImage:boolean = false;
  public products:Observable<IProduct[]>;
  public lastSearch:string = '';

  constructor(private productService:ProductService) {
  }

  ngOnInit() {
    this.products = this.productService.getProducts().map(
      products => {
         return this.lastSearch.length ? (products.filter(product => product.description.toLowerCase().indexOf(this.lastSearch.toLowerCase()) > -1 ||
                                                          product.productName.toLowerCase().indexOf(this.lastSearch.toLowerCase()) > -1 ||
                                                          product.productCode.toLowerCase().indexOf(this.lastSearch.toLowerCase()) > -1))
                                       : products
      }
    );
    /*this.productService.getProducts().subscribe(
      products => this.products = products,
      error => console.log(error)
    );*/
  }

  onShowImageClick() {
    this.showImage = !this.showImage;
  }

  onRatingChange(product, rating) {
    let newProduct = Object.assign({}, product, {starRating: rating});
    this.productService.putProduct(newProduct).subscribe(product => console.log('Product saved'));
  }

}
