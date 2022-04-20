import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { UtilService } from '@core/services/util.service';

@Component({
  selector: 'mm-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

	spacerId:string;
	sliderId:string;

	@Input() currentSlide:number = 1;
	@Input() count:number;
	@Input() start:number = 1;
	@Input() loop:boolean = false;

	private slider:HTMLElement;
	private spacer:HTMLElement

	constructor(private util:UtilService) {
		this.sliderId = util.generateElemntId();
		this.spacerId = util.generateElemntId();
	}

	ngOnInit() {

	}

	ngAfterViewInit() {
		this.slider = document.querySelector("#"+this.sliderId) as HTMLElement;
		this.spacer = document.querySelector("#"+this.spacerId) as HTMLElement;
	}

	moveSlider(direction) {
		if (!direction && this.currentSlide == this.start) return;
		if (direction && this.currentSlide == this.count) {
			if (!this.loop) {
				return;
			}else {
				this.currentSlide = this.start - 1;
			}
		}

		let width = this.slider.getBoundingClientRect().width;

		if (direction) {
			this.spacer.style.marginLeft = -(width*this.currentSlide)+"px";
			this.currentSlide++;
		}else {
			let currentMargin = parseInt(window.getComputedStyle(this.spacer).marginLeft);
			this.spacer.style.marginLeft = (currentMargin + width)+"px";
			this.currentSlide--;
		}
	}

}
