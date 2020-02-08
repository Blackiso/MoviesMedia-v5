import { Component, OnInit } from '@angular/core';
import { loginFormConfig } from '../../config/login-form.config';
import { AuthenticationService } from '../../services/authentication.service';
import { UserService } from '@core/services/user.service';
import { UtilService } from '@core/services/util.service';


@Component({
  selector: 'mm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

	public formConfig:any = loginFormConfig;

	constructor(
		private authService:AuthenticationService, 
		private userService:UserService,
		private util:UtilService
	) { }

	login(data) {
		console.log(data);
		this.authService.loginService(data).subscribe(
			data => {
				console.log(data);
				this.userService.key = data.key || null;
				this.userService.authenticate().then((data) => {
					if (data.auth) this.util.navigateTo('/home');
				});
			}
		);
	}
}
