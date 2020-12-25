import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'mm-categorys',
  templateUrl: './categorys.component.html',
  styleUrls: ['./categorys.component.css']
})
export class CategorysComponent implements OnInit {

	@ViewChild('moviesSlider') slider:any;
	@Input() title:string;
	@Input() icon:string;
	public slidesCount:number;
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

	constructor() { }

	ngOnInit() {
		this.slidesCount = Math.ceil(this.movies.length/6);
	}

	moveSlider(direction) {
		this.slider.moveSlider(direction);
	}

}
