import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService, DecimalPipe]
})
export class ProductListComponent implements OnInit {
  showImage:boolean = false;
  products:any[] = [];
  lastSearch:string = '';
  constructor(private productService:ProductService) { 
  }

  ngOnInit() {
    console.log('ProductListComponent initialized');
    this.products = this.productService.getProducts();
  }

  onShowImageClick() {
    this.showImage = !this.showImage;
  }

  onFilterChange(e) {
    //this.products = this.productService.getProducts(e.target.value);
  }

  onRatingChange(product, rating) {
    console.log('onRatingChange', product, rating);
    product.starRating = rating;
  }

}
