import { Directive, Output, EventEmitter, OnDestroy, OnInit } from '@angular/core';


@Directive({
  selector: '[mmScrollBottom]'
})
export class ScrollBottomDirective implements OnInit {

	@Output() mmScrollBottom = new EventEmitter<boolean>();

	constructor() { 
	}

	ngOnInit() {
		window.addEventListener('scroll', this.scrolling.bind(this));
	}

	scrolling() {
		if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
			this.mmScrollBottom.emit(true);
		}
	}

	ngOnDestroy() {
		window.removeEventListener('scroll', this.scrolling.bind(this));
	}
}
