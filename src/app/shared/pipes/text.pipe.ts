import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'text'
})
export class TextPipe implements PipeTransform {

	transform(value: string, ...args: unknown[]): unknown {
		return value.length > 200 ? value.slice(0, 200 - 1) + "…" : value;
	}

}
