import { Component, OnInit } from '@angular/core';
import { MovieDetailsService } from '@core/services/movie-details.service';


@Component({
  selector: 'mm-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {

	loadDetails:boolean = false;
	movieID:number;

	constructor(private DS:MovieDetailsService) {}

	ngOnInit() {
		this.DS.detailsEvents().subscribe(
			id => {
				this.loadDetails = !this.loadDetails;
				this.movieID = id;
			}
		);
	}

}
