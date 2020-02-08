import { Directive, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[mmForms]'
})
export class FormsDirective {

	@Output() mmForms = new EventEmitter<any>();
	private data:any = {};
	private tags:Array<string> = ['INPUT', 'SELECT'];

	constructor(private form:ElementRef) { }

	@HostListener('submit', ['$event'])
	submitForm(e) {
		e.preventDefault();
		this.getFormData(e.target);
		this.mmForms.emit(this.clearEmpty(this.data));
	}

	private getFormData(target:HTMLElement) {
		for (let i = 0; i < target.children.length; i++) {
			if (this.tags.includes(target.children[i].tagName)) {
				let elem = target.children[i] as HTMLInputElement;
				this.data[elem.name] = this.getValue(elem);
			}else {
				this.getFormData(target.children[i] as HTMLElement);
			}
		}
	}

	private getValue(elem:HTMLInputElement | HTMLSelectElement) {
		if (elem.tagName == "SELECT" && elem.multiple) {
			let selectMultiple = elem as HTMLSelectElement;
			let value = [];
			for (let i = 0; i < selectMultiple.options.length; i++) {
				if (selectMultiple.options[i].selected) {
					value.push(selectMultiple.options[i].value);
				}
			}
			return value.join(',');
		}else {
			return elem.value;
		}
	}

	private clearEmpty(obj:object) {
		for (let key in obj) {
			if (obj[key] == "" || obj[key] == [] || obj[key] == {} || obj[key] == null || obj[key] == undefined) {
				delete obj[key];
			}
		}
		return obj;
	}
}
