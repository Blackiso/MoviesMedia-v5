import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilterService } from '@core/services/filter.service';
import { AbstractMoviesComponent } from '@shared/components/abstract-movies/abstract-movies.component';
import { DiscoverService } from '../../services/discover.service';


@Component({
  selector: 'mm-search',
  templateUrl: './search.component.html',
  styleUrls: ['../../styles/discover.style.css']
})
export class SearchComponent extends AbstractMoviesComponent {

	public type = 'search';

	constructor(protected filter:FilterService, private _api:DiscoverService, private route:ActivatedRoute) {
		super(_api, filter);
	} 

	ngOnInit() {

		this.route.queryParams.subscribe(params => {
	        if ('keyword' in params) {
	        	this.filterObject.keyword = params['keyword'];
				this.loadMovies(1);
	        }
	    });

		this.loadMovies(1);
	}

	ngAfterViewInit() {
		this.loadFiler();
	}

	ngOnDestroy() {
		this.unloadFilter();
	}

}
