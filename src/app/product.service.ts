import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject, BehaviorSubject } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/mergeMap';

import { IProduct } from './product';

@Injectable()
export class ProductService {
  private productUrl = 'http://localhost:3000/products';
  private products: IProduct[];
  private products$: BehaviorSubject<IProduct[]>;
  private dataStore: ProductServiceDataStore = {
    products: []
  }


  constructor(private http: Http) {
    this.products$ = new BehaviorSubject<IProduct[]>([]);
  }

  getProducts(filter: string = ''): Observable<IProduct[]> {
    this.http.get(this.productUrl)
             .map((response: Response) =>  <IProduct[]>response.json() )
             .do(data => console.log('getProducts',data))
             .take(1)
             .subscribe(
               products => this.storeUpdateAll(products),
               error => console.log(error)
             );
    return this.products$.asObservable();
             /*.catch((err) => { return Observable.throw('backend server error', err);})*/

  }

  getProduct(id: number): Observable<IProduct> {
    this.http.get(this.productUrl + '/' + id)
             .map((response: Response) => { return <IProduct>response.json(); })
             .do(data => console.log('getProduct', data))
             .take(1)
             .subscribe(
               product => this.storeUpdateOne(product),
               error => console.log(error)
             );
    return this.products$.asObservable()
                         .flatMap(products => products)
                         .filter(product => product.id === id);
  }

  putProduct(myproduct: IProduct): Observable<IProduct>  {
    this.http.put(this.productUrl + '/' + myproduct.id, myproduct)
             .map((response : Response) => <IProduct>response.json())
             .do(data => console.log('puProduct', data))
             .take(1)
             .subscribe(
               product => this.storeUpdateOne(product),
               error => console.log(error)
             );
    return this.products$.asObservable()
                         .flatMap(products => products)
                         .filter(product => product.id === myproduct.id);
    
  }

  private storeUpdateAll(products: IProduct[]) {
    this.dataStore.products = products;
    this.next();
  }

  private storeUpdateOne(product: IProduct) {
    let index = this.dataStore.products.findIndex(curProduct => curProduct.id == product.id);
    if (index < 0) {
      this.dataStore.products.push(product);
    }
    else {
      this.dataStore.products[index] = product;
    }
    this.next();
  }

  private next() {
    this.products$.next(this.dataStore.products);
  }

}

export interface ProductServiceDataStore {
  products: IProduct[];
}
