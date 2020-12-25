import { Component, OnInit, Input, OnDestroy, ElementRef, HostBinding, Renderer2 } from '@angular/core';
import { UtilService } from '@core/services/util.service';
import { Location } from '@angular/common';
import { ActivatedRoute, NavigationStart, NavigationEnd, ActivationEnd } from '@angular/router';


@Component({
  selector: 'mm-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

	@Input() movieID:number;
	@HostBinding('class.overlay') isOverlay: boolean = false;

	movieData:any;
	movieCast:any = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
	movies:any = [
		{
			"id": 353081,
			"genres": ["Action", "Adventure"],
			"poster_path": "/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg",
			"release_year": 2018,
			"title": "Mission: Impossible - Fallout",
			"collection": {
				"watched": false,
				"watchList": false
			}
		},
		{
			"id": 353081,
			"genres": ["Action", "Adventure"],
			"poster_path": "/y95lQLnuNKdPAzw9F9Ab8kJ80c3.jpg",
			"release_year": 2020,
			"title": "Bad Boys for Life",
			"collection": {
				"watched": false,
				"watchList": false
			}
		},
		{
			"id": 353081,
			"genres": ["Action", "Adventure"],
			"poster_path": "/AuGiPiGMYMkSosOJ3BQjDEAiwtO.jpg",
			"release_year": 2019,
			"title": "1917",
			"collection": {
				"watched": false,
				"watchList": false
			}
		},
		{
			"id": 353081,
			"genres": ["Action", "Adventure"],
			"poster_path": "/yJdeWaVXa2se9agI6B4mQunVYkB.jpg",
			"release_year": 2019,
			"title": "Ip Man 4: The Finale",
			"collection": {
				"watched": false,
				"watchList": false
			}
		},
		{
			"id": 353081,
			"genres": ["Action", "Adventure"],
			"poster_path": "/db32LaOibwEliAmSL2jjDF6oDdj.jpg",
			"release_year": 2019,
			"title": "Star Wars: The Rise of Skywalker",
			"collection": {
				"watched": false,
				"watchList": false
			}
		},
		{
			"id": 353081,
			"genres": ["Action", "Adventure"],
			"poster_path": "/jyw8VKYEiM1UDzPB7NsisUgBeJ8.jpg",
			"release_year": 2019,
			"title": "Jumanji: The Next Level",
			"collection": {
				"watched": false,
				"watchList": false
			}
		},
		{
			"id": 353081,
			"genres": ["Action", "Adventure"],
			"poster_path": "/vloNTScJ3w7jwNwtNGoG8DbTThv.jpg",
			"release_year": 2019,
			"title": "Maleficent: Mistress of Evil",
			"collection": {
				"watched": false,
				"watchList": false
			}
		},
		{
			"id": 353081,
			"genres": ["Action", "Adventure"],
			"poster_path": "/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg",
			"release_year": 2018,
			"title": "Mission: Impossible - Fallout",
			"collection": {
				"watched": false,
				"watchList": false
			}
		},
		{
			"id": 353081,
			"genres": ["Action", "Adventure"],
			"poster_path": "/vloNTScJ3w7jwNwtNGoG8DbTThv.jpg",
			"release_year": 2019,
			"title": "Maleficent: Mistress of Evil",
			"collection": {
				"watched": false,
				"watchList": false
			}
		},
		{
			"id": 353081,
			"genres": ["Action", "Adventure"],
			"poster_path": "/jyw8VKYEiM1UDzPB7NsisUgBeJ8.jpg",
			"release_year": 2019,
			"title": "Jumanji: The Next Level",
			"collection": {
				"watched": false,
				"watchList": false
			}
		},
		{
			"id": 353081,
			"genres": ["Action", "Adventure"],
			"poster_path": "/pjeMs3yqRmFL3giJy4PMXWZTTPa.jpg",
			"release_year": 2019,
			"title": "Frozen II",
			"collection": {
				"watched": false,
				"watchList": false
			}
		},
		{
			"id": 353081,
			"genres": ["Action", "Adventure"],
			"poster_path": "/jyw8VKYEiM1UDzPB7NsisUgBeJ8.jpg",
			"release_year": 2019,
			"title": "Jumanji: The Next Level",
			"collection": {
				"watched": false,
				"watchList": false
			}
		},
		{
			"id": 353081,
			"genres": ["Action", "Adventure"],
			"poster_path": "/yJdeWaVXa2se9agI6B4mQunVYkB.jpg",
			"release_year": 2019,
			"title": "Ip Man 4: The Finale",
			"collection": {
				"watched": false,
				"watchList": false
			}
		},
		{
			"id": 353081,
			"genres": ["Action", "Adventure"],
			"poster_path": "/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg",
			"release_year": 2018,
			"title": "Mission: Impossible - Fallout",
			"collection": {
				"watched": false,
				"watchList": false
			}
		},
		{
			"id": 353081,
			"genres": ["Action", "Adventure"],
			"poster_path": "/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg",
			"release_year": 2018,
			"title": "Mission: Impossible - Fallout",
			"collection": {
				"watched": false,
				"watchList": false
			}
		}
	];
	openVideo:boolean = false;
	subscriptions:any = [];

	constructor(
		private util:UtilService, 
		private location:Location, 
		private elementRef:ElementRef, 
		private renderer:Renderer2,
		private activeRoute:ActivatedRoute
	) {
	}

	ngOnInit() {		
		let dataEvent = this.activeRoute.data.subscribe(
			data => { 
				if (data.overlay) {
					this.isOverlay = true;
					this.location.replaceState('/movie/'+Math.random());
				}
			}
		);

		if (this.isOverlay) {
			let routerEvents = this.util.router.events.subscribe(event => {
				if (event instanceof ActivationEnd) this.closeDetails();
			});
			this.subscriptions.push(routerEvents);
		}

		this.subscriptions.push(dataEvent);
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
