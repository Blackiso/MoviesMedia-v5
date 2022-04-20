import { Component, OnInit } from '@angular/core';
import { MoviesService } from '@core/services/movies.service';
import { UserService } from '@core/services/user.service';

@Component({
  selector: 'mm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	public is_loggedIn:boolean = false;
	public featured:any = null;
	public featured_loaded:boolean = false;

	constructor(private user:UserService, private moviesService:MoviesService) {
		user.loginState().subscribe(x => this.is_loggedIn = x);
	}

	ngOnInit() {
		this.moviesService.getMovies('popular').subscribe(data => {
			this.featured = data.results.splice(0, 6) || [];
			this.featured_loaded = true;
			console.log(this.featured);
		});
	}

}
