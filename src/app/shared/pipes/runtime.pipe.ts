import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'runtime'
})
export class RuntimePipe implements PipeTransform {

	transform(value: number, ...args: unknown[]): unknown {
		let minutes = value % 60;
		let hours = (value - minutes) / 60;
		return hours + "h" + minutes + "min";
	}

}
