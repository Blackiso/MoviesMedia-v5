import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '@core/services/user.service';
import { ENDPOINTS } from '@core/api.config';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

	constructor(
		private http:HttpClient, 
		private userService:UserService
	) { }

	httpRequest(url, data) {
		return this.http.post<any>(url, data);
	}

	runAuthentication(to, data) {
		return new Promise<any>((resolve, reject) => {
			this.httpRequest(ENDPOINTS[to], data).toPromise()
				.then(loginData => {
					this.userService.setToken(loginData);
					this.userService.saveToken();
					return this.userService.authenticate();
				})
				.then(authData => {
					if (!authData.username) reject(authData);
					resolve(authData);
				})
				.catch(x => {
					reject(x);
				});
		});
	}
}
