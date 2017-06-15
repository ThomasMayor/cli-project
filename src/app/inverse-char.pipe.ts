import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inverseChar'
})
export class InverseCharPipe implements PipeTransform {

  transform(value: string): string {
    return value.split('').reverse().join('');
  }

}
