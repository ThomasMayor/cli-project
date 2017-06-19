import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { ProductService } from '../product.service';
import { IProduct } from '../product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService]
})
export class ProductListComponent implements OnInit {
  showImage:boolean = false;
  products:IProduct[] = [];
  lastSearch:string = '';

  constructor(private productService:ProductService) {
  }

  ngOnInit() {
    this.productService.getProducts().map(
      products => {
         return this.lastSearch.length ? (products.filter(product => product.description.toLowerCase().indexOf(this.lastSearch.toLowerCase()) > -1 ||
                                                          product.productName.toLowerCase().indexOf(this.lastSearch.toLowerCase()) > -1 ||
                                                          product.productCode.toLowerCase().indexOf(this.lastSearch.toLowerCase()) > -1))
                                       : products
      }
    ).subscribe(
      products => this.products = products,
      error => console.log(error)
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
    product.starRating = rating;
  }

}
