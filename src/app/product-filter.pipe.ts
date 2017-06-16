import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(allProducts: IProduct[], filter:string): IProduct[] {
    return allProducts.filter((item) => {
        return item.description.toLowerCase().indexOf(filter.toLowerCase()) > -1 ||
               item.productName.toLowerCase().indexOf(filter.toLowerCase()) > -1 ||
               item.productCode.toLowerCase().indexOf(filter.toLowerCase()) > -1;
      });
  }

}
