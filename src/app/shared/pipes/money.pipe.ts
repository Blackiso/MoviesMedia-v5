import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'money'
})
export class MoneyPipe implements PipeTransform {

	transform(value: unknown, ...args: unknown[]): unknown {
		return Math.abs(Number(value)) >= 1.0e+9? (Math.abs(Number(value)) / 1.0e+9).toFixed(1) + "B"
		    	: Math.abs(Number(value)) >= 1.0e+6? Math.round(Math.abs(Number(value)) / 1.0e+6) + "M"
		    	: Math.abs(Number(value)) >= 1.0e+3? Math.round(Math.abs(Number(value)) / 1.0e+3) + "K"
		    	: Math.abs(Number(value));
	}

}
