import { OnInit } from '@angular/core';
import { MoviesApi } from '@core/interfaces/movies-api';
import { Movie } from '@core/models/movie.model';


export class AbstractMoviesComponent implements OnInit {

	public movies:Array<Movie> = [];
	public loading:boolean = false;
	public type:string;

	constructor(protected api:MoviesApi) { }

	ngOnInit() {
		this.loadMovies();
	}

	loadMovies(page?, reset?) {
		this.loading = true;
		this.api.getMovies(this.type, page).subscribe(data => {
			this.movies = reset ? data.movies : [...this.movies, ...data.movies];
			this.loading = false;
		});
	}

	filterMovies(data) {
		if (data == null) {
			this.api.clearParams();
		}else {
			this.api.setParams(data);
		}
		this.loadMovies(false, true);
	}
}
