import { Component, OnInit } from '@angular/core';
import { Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { UserService } from '@core/services/user.service';

@Component({
  selector: 'mm-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

	public collectionUrl:string = '/collection';
	public loading:boolean = false;
	public loadingEnd:boolean = false;
	public is_loggedIn:boolean = false;

	constructor(private router: Router, private userService:UserService) {
		userService.is_loggedIn().subscribe(x => {
			this.is_loggedIn = x;
			this.collectionUrl = !this.is_loggedIn ? '/auth/login' : '/collection';
		});
	}

	ngOnInit() {
		this.router.events.subscribe(e => {
			switch (true) {
				case e instanceof NavigationStart:
					this.loading = true;
					this.loadingEnd = false;
					break;

				case e instanceof NavigationEnd:
				case e instanceof NavigationCancel:
				case e instanceof NavigationError:
					this.loading = false;
					this.loadingEnd = true;
					break;

				default:
					break;
			}
		});
	}

}
