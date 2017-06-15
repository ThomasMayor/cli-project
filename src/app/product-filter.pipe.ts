import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(allProducts: any[], filter:string): any[] {
    return allProducts.filter((item) => {
        return item.description.toLowerCase().indexOf(filter.toLowerCase()) > -1 ||
               item.productName.toLowerCase().indexOf(filter.toLowerCase()) > -1 ||
               item.productCode.toLowerCase().indexOf(filter.toLowerCase()) > -1;
      });
  }

}
