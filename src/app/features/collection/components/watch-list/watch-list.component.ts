import { Component, OnInit } from '@angular/core';
import { FilterService } from '@core/services/filter.service';
import { AbstractMoviesComponent } from '@shared/components/abstract-movies/abstract-movies.component';
import { CollectionApiService } from '../../services/collection-api.service';


@Component({
  selector: 'mm-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css']
})
export class WatchListComponent extends AbstractMoviesComponent {

	public type = 'watchlist';

	constructor(private apiImpl:CollectionApiService, filter:FilterService) {
		super(apiImpl, filter);
	}

	ngOnInit() {
		this.loadMovies(1);
	}

}
