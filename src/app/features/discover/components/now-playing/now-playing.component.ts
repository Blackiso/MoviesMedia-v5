import { Component, OnInit } from '@angular/core';
import { AbstractMoviesComponent } from '@shared/components/abstract-movies/abstract-movies.component';
import { DiscoverService } from '../../services/discover.service';


@Component({
  selector: 'mm-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['../../styles/discover.style.css']
})
export class NowPlayingComponent extends AbstractMoviesComponent {

	public type = 'now-playing';

	constructor(private apiImpl:DiscoverService) {
		super(apiImpl);
	}
}