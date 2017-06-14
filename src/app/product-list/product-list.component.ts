import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService]
})
export class ProductListComponent implements OnInit {
  showImage = false;
  products = [];
  constructor(private productService:ProductService) { 
    this.products = this.productService.getProducts();
  }

  ngOnInit() {
  }

  onShowImageClick() {
    console.log('onShowImageClick');
    this.showImage = !this.showImage;
  }

  onFilterChange(e) {
    console.log('onFilterChange', e);
    this.products = this.productService.getProducts(e.target.value);
  }

}
