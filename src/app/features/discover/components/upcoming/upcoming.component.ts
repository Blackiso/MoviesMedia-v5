import { Component, OnInit } from '@angular/core';
import { AbstractMoviesComponent } from '@shared/components/abstract-movies/abstract-movies.component';
import { DiscoverService } from '../../services/discover.service';


@Component({
  selector: 'mm-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['../../styles/discover.style.css']
})
export class UpcomingComponent extends AbstractMoviesComponent {

	public type = 'upcoming';

	constructor(private apiImpl:DiscoverService) {
		super(apiImpl);
	}
}