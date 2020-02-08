import { Component, OnInit } from '@angular/core';
import { AbstractMoviesComponent } from '@shared/components/abstract-movies/abstract-movies.component';
import { DiscoverService } from '../../services/discover.service';


@Component({
  selector: 'mm-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['../../styles/discover.style.css']
})
export class PopularComponent extends AbstractMoviesComponent {

	public type = 'popular';

	constructor(private apiImpl:DiscoverService) {
		super(apiImpl);
	}
}