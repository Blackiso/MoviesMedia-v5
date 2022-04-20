import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'year'
})
export class YearPipe implements PipeTransform {

	transform(value: number, ...args: unknown[]): unknown {
		return new Date(value).getFullYear();
	}

}
