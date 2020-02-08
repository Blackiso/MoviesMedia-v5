import { Component, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { AbstractMoviesComponent } from '@shared/components/abstract-movies/abstract-movies.component';
import { CollectionApiService } from '../../services/collection-api.service';
import { MoviesContainerComponent } from '@shared/components/movies-container/movies-container.component';
import { FilterService } from '@core/services/filter.service';


@Component({
  selector: 'mm-watched',
  templateUrl: './watched.component.html',
  styleUrls: ['./watched.component.css']
})
export class WatchedComponent extends AbstractMoviesComponent {

	@ViewChild('sortSelect', {static: true}) sortSelect:ElementRef;
	@ViewChild('moviesContainer', {static: true}) moviesContainer:MoviesContainerComponent;
	private selectElemnt:HTMLSelectElement;
	private filterSub:any;
	public type = 'watched';
	public page:number;

	constructor(private apiImpl:CollectionApiService, private filter:FilterService) {
		super(apiImpl);
	}

	ngAfterViewInit() {
		this.filter.loadFilter(true);
		this.selectElemnt = this.sortSelect.nativeElement;
		this.selectElemnt.addEventListener('change', this.sortMovies.bind(this));
		this.filterSub = this.filter.dataEvent().subscribe(data => this.filterMovies(data));
	}

	sortMovies() {
		this.api.setParams({sort: this.selectElemnt.value});
		this.moviesContainer.resetPage();
		this.loadMovies(false, true);
	}

	openFilter() {
		this.filter.toggleFilter();
	}

	ngOnDestroy() {
		this.selectElemnt.removeEventListener('change', this.sortMovies.bind(this));
		this.filterSub.unsubscribe();
		this.filter.loadFilter(false);
	}
}
