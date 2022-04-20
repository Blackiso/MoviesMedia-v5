import { Component, OnInit, ElementRef } from '@angular/core';
import { Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart } from '@angular/router';
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
	public searchValue:string = '';

	constructor(private userService:UserService, public util:UtilService, private dom:ElementRef) {}

	ngOnInit() {

		this.userService.loginState().subscribe(state => {
			console.log('state from nav', state);
			this.is_loggedIn = state;
		});

		this.util.router.events.subscribe(e => {
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

	search(data) {
		this.util.navigateTo('/discover/search', data);
		this.dom.nativeElement.querySelector('.search input').value = '';
	}

}
