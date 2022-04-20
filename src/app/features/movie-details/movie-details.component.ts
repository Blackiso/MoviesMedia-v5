import { Component, OnInit, HostBinding } from '@angular/core';
import { UtilService } from '@core/services/util.service';
import { Location } from '@angular/common';
import { ActivatedRoute, ActivationEnd } from '@angular/router';
import { MoviesService } from '@core/services/movies.service';


@Component({
  selector: 'mm-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

	private movieID:number;
	@HostBinding('class.overlay') isOverlay: boolean = false;

	movieData:any;
	openVideo:boolean = false;
	subscriptions:any = [];
	loading:boolean = true;

	constructor(
		private util:UtilService, 
		private location:Location, 
		private activeRoute:ActivatedRoute,
		private moviesService:MoviesService
	) {}

	ngOnInit() {		
		this.activeRoute.data.subscribe(
			data => { 
				if (data.overlay) {
					this.isOverlay = true;
				}
			}
		);

		this.activeRoute.params.subscribe(params => {
            this.movieID = params['movie-id'];
            if (this.isOverlay) {
        		this.location.replaceState('/movie/'+this.movieID);
        	}
            this.moviesService.getMovie(this.movieID).subscribe(data => {
            	this.movieData = data;
            	this.loading = false;
            });

        });

		if (this.isOverlay) {
			let routerEvents = this.util.router.events.subscribe(event => {
				if (event instanceof ActivationEnd) this.closeDetails();
			});
			this.subscriptions.push(routerEvents);
		}
	}

	getDirectors() {
		return this.movieData.directors.map(d => d.name).join(', ');
	}

	addToCollection(type:string) {
		this.moviesService.addMovieToCollection(this.movieData.id, this.movieData.collection, type).subscribe();
	}

	closeDetails() {
		this.unsubscribe();
		this.util.router.navigate([{ outlets: { overlay: null } }]);
	}

	ngOnDestroy() {
		this.unsubscribe();
	}

	unsubscribe() {
		this.subscriptions.forEach(s => s.unsubscribe());
	}
}
