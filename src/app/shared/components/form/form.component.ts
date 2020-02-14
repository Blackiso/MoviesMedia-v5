import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'mm-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

	@Input() config:any;
	@Input() button:string = "Submit";
	@Output() form = new EventEmitter<any>();
	@ViewChild('form', { static: true }) formRef:ElementRef;

	constructor() { }

	ngOnInit() {}

	onSubmit(e) {
		this.form.emit(e);
	}
}
