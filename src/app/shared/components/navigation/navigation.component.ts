import { Component, OnInit } from '@angular/core';
import { Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { UserService } from '@core/services/user.service';
import { UtilService } from '@core/services/util.service';

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

	constructor(private router: Router, private userService:UserService, public util:UtilService) {
		userService.is_loggedIn().subscribe(x => this.is_loggedIn = x);
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

	collection() {
		if (this.is_loggedIn) {
			this.util.navigateTo('/collection');
		}else {
			this.util.goToAuth('/login', '/collection');
		}
	}

}
