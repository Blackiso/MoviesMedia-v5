import { Component, Input, Output, EventEmitter, Inject, Optional } from '@angular/core';
import { Subject } from 'rxjs';
import { LOADING } from '@core/classes/Providers';

@Component({
  selector: 'mm-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

	@Input() id:string;
	@Input() css:string;
	@Input() canLoad:boolean = false;
	@Output() event = new EventEmitter<any>();
	public loading:boolean = false;

	constructor(@Inject(LOADING) @Optional() loading$:Subject<any>) {
		if (loading$) {
			loading$.subscribe(x => this.loading = false);
		}
	}

	clicked() {
		if (this.canLoad) this.loading = true;
		this.event.emit();
	}
}
