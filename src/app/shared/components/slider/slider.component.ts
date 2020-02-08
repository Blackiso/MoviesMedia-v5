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
		this.initSlider();
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

		let width = window.getComputedStyle(this.slider, null).getPropertyValue("width");
		let margin;

		if (direction) {
			margin = Number.parseInt(width)*this.currentSlide;
			this.currentSlide++;
		}else {
			this.currentSlide--;
			margin = (Number.parseInt(width)*this.currentSlide) - Number.parseInt(width);
		}

		this.spacer.style.marginLeft = "-"+margin+"px";
	}

	initSlider() {
		let width = window.getComputedStyle(this.slider, null).getPropertyValue("width");
		let margin = Number.parseInt(width)*(this.currentSlide - 1);
		this.spacer.style.marginLeft = "-"+margin+"px";
	}
}
