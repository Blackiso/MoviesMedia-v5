import { Component, OnInit } from '@angular/core';
import { FilterService } from '@core/services/filter.service';
import { AbstractMoviesComponent } from '@shared/components/abstract-movies/abstract-movies.component';
import { CollectionApiService } from '../../services/collection-api.service';


@Component({
  selector: 'mm-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent extends AbstractMoviesComponent {

	public type = 'recommendations';

	constructor(private apiImpl:CollectionApiService, filter:FilterService) {
		super(apiImpl, filter);
	}

}