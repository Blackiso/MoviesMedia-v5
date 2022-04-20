import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'mm-list-slider',
  templateUrl: './list-slider.component.html',
  styleUrls: ['./list-slider.component.css']
})
export class ListSliderComponent implements OnInit {

	@ViewChild('moviesSlider') slider:any;
	@Input() movies:any;
	public slidesCount:number;

	constructor() { }

	ngOnInit(): void {
		this.slidesCount = Math.ceil(this.movies.length/6);
	}

	moveSlider(direction) {
		this.slider.moveSlider(direction);
	}
}
