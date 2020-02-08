import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { FilterService } from '@core/services/filter.service';
import { AbstractMoviesComponent } from '@shared/components/abstract-movies/abstract-movies.component';
import { DiscoverService } from '../../services/discover.service';


@Component({
  selector: 'mm-search',
  templateUrl: './search.component.html',
  styleUrls: ['../../styles/discover.style.css']
})
export class SearchComponent extends AbstractMoviesComponent {

	public type = 'popular';

	constructor(private filter:FilterService, private _api:DiscoverService) {
		super(_api);
	} 

	ngAfterViewInit() {
		this.filter.loadFilter(true);
	}

	openFilter() {
		this.filter.toggleFilter();
	}

	ngOnDestroy() {
		this.filter.loadFilter(false);
	}
}
