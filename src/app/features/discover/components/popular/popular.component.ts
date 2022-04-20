import { Component, OnInit } from '@angular/core';
import { FilterService } from '@core/services/filter.service';
import { AbstractMoviesComponent } from '@shared/components/abstract-movies/abstract-movies.component';
import { FilterObject } from '@shared/interfaces';
import { DiscoverService } from '../../services/discover.service';


@Component({
  selector: 'mm-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['../../styles/discover.style.css']
})
export class PopularComponent extends AbstractMoviesComponent {

	public type = 'popular';

	constructor(private apiImpl:DiscoverService, protected filter:FilterService) {
		super(apiImpl, filter);
	}

	ngOnInit() {
		this.loadMovies(1);
	}
}