import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Pipe({
  name: 'myCurrency'
})
export class MyCurrencyPipe implements PipeTransform {
  
  constructor(public decimalPipe:DecimalPipe ) {}

  transform(value: number, currency: string, show?:boolean, digit?:string): string {
    let result = this.decimalPipe.transform(value, digit);
    if (show)
      result += ' ' + currency;
    return result;
  }

}
