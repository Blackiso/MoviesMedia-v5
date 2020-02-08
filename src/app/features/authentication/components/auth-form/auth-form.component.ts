import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'mm-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {

	@Input() config:any;
	@Input() button:string = "Submit";
	@Output() form = new EventEmitter<any>();

	constructor() { }

	ngOnInit() {
	}

	onSubmit(e) {
		this.form.emit(e);
	}
}
