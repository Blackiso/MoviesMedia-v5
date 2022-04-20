import { OnInit, Directive } from '@angular/core';
import { MoviesApi } from '@core/interfaces/movies-api';
import { Movie } from '@core/models/movie.model';
import { FilterService } from '@core/services/filter.service';
import { FilterObject } from '@shared/interfaces';
import { Observable } from 'rxjs';


@Directive()
export class AbstractMoviesComponent {

	public movies:Array<Movie> = [];
	public totalResults:number;
	public loading:boolean = false;
	public type:string;
	public filterObject:FilterObject = {};
	public order:string;

	private filterSub:any;
	private page:number = 1;

	constructor(protected api:MoviesApi, protected filter:FilterService) { }

	loadFiler() {
		this.filter.loadFilter(true);
		this.filterSub = this.filter.dataEvent().subscribe(data => {
			this.filterObject = data;
			this.loadMovies(1);
		});
	}

	unloadFilter() {
		this.filterSub.unsubscribe();
		this.filter.loadFilter(false);
	}

	openFilter() {
		this.filter.toggleFilter();
	}

	loadMovies(page?) {

		if (typeof page !== 'undefined') {
			this.page = page;
		}else {
			this.page++;
		}

		this.loading = true;

		if (typeof this.order !== 'undefined') {
			this.filterObject.order = this.order;
		}

		this.api.getMovies(this.type, this.page, this.filterObject).subscribe(data => {
			this.totalResults = data.total_results;
			this.insertMovies(data.results, this.page == 1);
		});
	}

	insertMovies(data:Array<any>, reset:boolean = true) {
		this.movies = reset ? data : [...this.movies, ...data];
		this.loading = false;
	}

}
