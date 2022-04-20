import { Component, OnInit, ViewChild, AfterViewInit, HostListener, OnDestroy, Input } from '@angular/core';
import { UtilService } from '@core/services/util.service';

@Component({
  selector: 'mm-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {

	@ViewChild('featuredSlider') featuredSlider:any;
	@Input() featured:any = null;
	private sliderInterval:any;
	currentSlide:number = 1;
	slideCount:number = 6;

	constructor(private util:UtilService) {
	}

	ngOnInit() {
		console.log(this.featured);
	}

	ngAfterViewInit() {
		this.initInterval();
	}

	initInterval() {
		this.sliderInterval = setInterval(() => {
			this.moveSlider(true);
		}, 3000);
	}

	moveSlider(direction) {
		this.featuredSlider.moveSlider(direction);
		if (this.currentSlide == this.slideCount) {
			this.currentSlide = 1;
		}else if (direction == false && this.currentSlide !== 1) {
			this.currentSlide--;
		}else if (direction)  {
			this.currentSlide++;
		}
		this.setIndicator();
	}

	setIndicator() {
		let indecators = document.querySelectorAll('.indicators > span');
		for (let i = 0; i < indecators.length; i++) {
			if (i+1 == this.currentSlide) {
				indecators[i].classList.add('active');
			}else {
				indecators[i].classList.remove('active');
			}
		}
	}

	@HostListener('mouseover')
	stopSlider() {
		clearInterval(this.sliderInterval);
	}

	@HostListener('mouseout')
	startSlider() {
		this.initInterval();
	}

	ngOnDestroy() {
		clearInterval(this.sliderInterval);
	}
}
