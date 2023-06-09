import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseString',
  pure:false
})
export class ReverseStringPipe implements PipeTransform {

  transform(value: string):string {
    if(!value){
      return '';
    }
    return value.split('').reverse().join('');
  }

}
