import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { UtilService } from '@core/services/util.service';

@Component({
  selector: 'mm-more-movies',
  templateUrl: './more-movies.component.html',
  styleUrls: ['./more-movies.component.css', '../../movie-details.component.css']
})
export class MoreMoviesComponent implements OnInit {

	@Input() movies:any;

	constructor(private util:UtilService) {
	}

	ngOnInit() {
	}

}
