import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilService } from '@core/services/util.service';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

	private authUrl:string = "http://localhost/mm-mock/auth.php";
	private _is_loggedIn = new BehaviorSubject<boolean>(false);
	private _username:string;
	private _key:string;

	constructor(private http:HttpClient, private util:UtilService) { }

	is_loggedIn() {
		return this._is_loggedIn.asObservable();
	}

	set_is_loggedIn(x) {
		this._is_loggedIn.next(x);
	}

	get is_loggedInValue() {
		return this._is_loggedIn.getValue();
	}

	get key() {
		return  this._key;
	}

	set key(x) {
		this._key = x;
	}

	authenticate() {
		return new Promise<any>((resolve, reject) => {
			this.http.get<any>(this.authUrl)
				.toPromise()
				.then(res => {
					this.set_is_loggedIn(res.auth || false);
					if (this._is_loggedIn) this._username = res.username;
					resolve(res);
				});
		});
	}
 }
