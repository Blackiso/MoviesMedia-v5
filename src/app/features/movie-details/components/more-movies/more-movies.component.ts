import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { UtilService } from '@core/services/util.service';

@Component({
  selector: 'mm-more-movies',
  templateUrl: './more-movies.component.html',
  styleUrls: ['./more-movies.component.css', '../../movie-details.component.css']
})
export class MoreMoviesComponent implements OnInit {

	@ViewChild('moviesSlider') moviesSlider:any;
	@Input() movies:any;
	private slidesCount:number;

	constructor(private util:UtilService) {
	}

	ngOnInit() {
		this.slidesCount = Math.ceil(this.movies.length/6);
	}

	moveSlider(direction) {
		this.moviesSlider.moveSlider(direction);
	}

}
