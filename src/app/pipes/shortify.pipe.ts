import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortify'
})
export class ShortifyPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    if (value.length > 140) {
      value = value.slice(0, 140) + '...';
    }

    return value;
  }

}
