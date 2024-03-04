import { product } from 'src/app/interfaces/product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(productList:product[],term:string): product[] {
    return productList.filter(product => product.title.toLowerCase().includes(term.toLowerCase()));
  }

}
