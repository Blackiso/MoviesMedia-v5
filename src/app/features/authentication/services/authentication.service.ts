import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilService } from '@core/services/util.service';
import { UserService } from '@core/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

	private loginUrl:string = "http://localhost/mm-mock/login.php";

	constructor(
		private http:HttpClient, 
		private util:UtilService,
		private userService:UserService
	) { }

	httpRequest(url, data) {
		let form = this.util.createFormData(data);
		return this.http.post<any>(this.loginUrl, form);
	}

	runAuthentication(to, data) {
		let paramSub;
		let url = this[to+'Url'];
		return new Promise<any>((resolve, reject) => {
			this.httpRequest(url, data).toPromise()
				.then(loginData => {
					console.log('login ', loginData);
					this.userService.key = loginData.key || null;
					return this.userService.authenticate();
				})
				.then(authData => {
					if (!authData.auth) reject(authData);
					resolve(authData);
				})
				.catch(x => console.log(x));
		});
	}
}
