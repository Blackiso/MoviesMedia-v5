import { Component, OnInit, Inject } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { UtilService } from '@core/services/util.service';
import { Subject } from 'rxjs';
import { LOADING } from '@core/classes/Providers';


@Component({
	template: ''
})
export class AuthComponent {

	private subs = [];
	public btnId:string = "authLoad";

	constructor(
		private authService:AuthenticationService,
		private util:UtilService,
		@Inject(LOADING) private loading$:Subject<any>
	) { }

	authenticate(type, data) {
		this.authService.runAuthentication(type, data)
			.then(data => {
				this.stopLoading();
				this.subs.push(this.util.activeRoute.queryParams.subscribe(
					params => {
						if (params['back']) {
							this.util.router.navigateByUrl(atob(decodeURIComponent(params['back'])));
						}else {
							this.util.navigateTo('/home');
						}
					}
				));
			})
			.catch(data => {
				this.stopLoading();
			});
	}

	stopLoading() {
		this.loading$.next()
	}

	ngOnDestroy() {
		this.subs.forEach(sub => sub.unsubscribe());
	}

}
