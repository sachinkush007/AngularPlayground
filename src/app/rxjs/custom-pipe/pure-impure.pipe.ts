import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pureImpure',
  pure:false
})
export class PureImpurePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (!Array.isArray(value)) {
      return value;
    }
    return value.join();
  }

}
