import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'country'
})
export class CountryPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return '';
    } else if (value == 'ENG') {
      return 'gb-eng';
    } else if (value == 'SCO'){
      return 'gb-sct';
    } else if (value == 'WAL') {
      return 'gb-wls';
    } else if (value == 'SWE') {
      return 'se';
    } else if (value == 'ZIM') {
      return 'zw'
    } else if (value == 'POL') {
      return 'pl'
    }

    return value.substr(0, 2).toLowerCase();
  }
}
