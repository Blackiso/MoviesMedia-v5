import { Directive, Input, HostListener, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[mmToggle]'
})
export class ToggleElementDirective {

	@Input() mmToggle:string;
	private activateClickAway:boolean = true;
	private elemnt:HTMLElement;

	constructor(private mainEl:ElementRef) {}

	ngOnInit() {
		let split = this.mmToggle.split(' ');
		this.mmToggle = split[0];
		if (typeof split[1] == "string") {
			this.activateClickAway = !(split[1] == 'false');
		}
	}

	@HostListener('click')
	toggle() {
		this.elemnt = document.querySelector('#'+this.mmToggle) as HTMLElement;
		this.elemnt.classList.toggle('hide');

		if (!this.elemnt.classList.contains('hide')) {
			this.clickAway = this.clickAway.bind(this);
			window.addEventListener('click', this.clickAway, true);
		}else {	
			this.removeEvent();
		}
	}

	clickAway(e) {
		let el = e.target;
		if (el == this.mainEl.nativeElement || el == this.elemnt) return;
		if (this.activateClickAway) {
			while(el.parentNode) {
				el = el.parentNode;
				if (el == this.elemnt) return;
			}			
		}
		this.elemnt.classList.add('hide');
		this.removeEvent();
	}

	removeEvent() {
		window.removeEventListener('click', this.clickAway, true);
	}
}
