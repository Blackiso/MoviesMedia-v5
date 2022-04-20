import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilService } from '@core/services/util.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { ENDPOINTS } from '@core/api.config';
import { LocalStorage } from '@core/classes/LocalStorage';

interface Token {
	token:string;
	expiration:number;
	tokenId:string;
}

export interface User {
	id:string;
	username:string;
	profile_image:string;
	email:string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

	private login_state = new BehaviorSubject<boolean>(false);
	private token_data:Token | null = null;

	private user:User;

	constructor(private http:HttpClient, private util:UtilService, private localStorage:LocalStorage) { }

	loginState():Observable<boolean> {
		return this.login_state.asObservable();
	}

	loginStateValue():boolean {
		return this.login_state.getValue();
	}

	setLoginState(value:boolean) {
		this.login_state.next(value);
	}

	userInfo():User {
		return this.user;
	}

	setToken(data:Token) {
		this.token_data = data;
	}

	saveToken() {
		this.localStorage.add('JWT', JSON.stringify(this.token_data));
	}

	loadToken() {
		this.token_data = JSON.parse(this.localStorage.get('JWT'));
	}

	getToken():string | null {
		return this.token_data !== null ? this.token_data.token : null;
	}

	authenticate() {
		return new Promise<any>((resolve, reject) => {
			this.http.get<any>(ENDPOINTS.authenticate)
				.toPromise()
				.then(res => {
					if(res.id) {
						this.user = res;
						this.setLoginState(true);
					}else {
						this.setLoginState(false);
					}
					resolve(res);
				})
				.catch(err => {
					console.log(err);
					this.setLoginState(false);
					resolve(false);
				});
		});
	}
 }
