import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trunc',
  standalone: true
})
export class TruncPipe implements PipeTransform {
  transform(
     value: string,
     limit: number = 100, 
     trail: string = '...'): string {
    if(!value) return ''
    return value.length > limit ? value.slice(0, limit) + trail : value
  }
}
