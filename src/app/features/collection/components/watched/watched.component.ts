import { Component, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { AbstractMoviesComponent } from '@shared/components/abstract-movies/abstract-movies.component';
import { CollectionApiService } from '../../services/collection-api.service';
import { FilterService } from '@core/services/filter.service';


@Component({
  selector: 'mm-watched',
  templateUrl: './watched.component.html',
  styleUrls: ['./watched.component.css']
})
export class WatchedComponent extends AbstractMoviesComponent {

	public type:string = 'watched';
	public order:string = 'NF';

	constructor(private apiImpl:CollectionApiService, protected filter:FilterService) {
		super(apiImpl, filter);
	}

	ngAfterViewInit() {
		this.loadFiler();
	}

	ngOnInit() {
		this.loadMovies(1);
	}

	sortMovies(value) {
		this.order = value;
		this.loadMovies(1);
	}

	ngOnDestroy() {
		this.unloadFilter();
	}
	
}
