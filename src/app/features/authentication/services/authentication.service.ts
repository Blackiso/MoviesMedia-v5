import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilService } from '@core/services/util.service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

	private loginUrl:string = "http://localhost/mm-mock/login.php";

	constructor(private http:HttpClient, private util:UtilService) { }

	loginService(data) {
		let form = this.util.createFormData(data);
		return this.http.post<any>(this.loginUrl, form);
	}
}
