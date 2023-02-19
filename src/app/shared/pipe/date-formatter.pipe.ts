import dayjs from 'dayjs';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormatter',
})
export class DateFormatterPipe implements PipeTransform {
  public transform(date: string | Date, format: string = 'DD.MM.YYYY'): string {
    return dayjs(date).format(format);
  }
}
