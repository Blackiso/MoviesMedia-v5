import { Component, OnInit, OnDestroy } from '@angular/core';
import { loginFormConfig } from '../../config/login-form.config';
import { AuthComponent } from '../auth/auth.component';
import { Subject } from 'rxjs';
import { LOADING } from '@core/classes/Providers';

@Component({
  selector: 'mm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [{ provide: LOADING, useFactory: ()=> new Subject<any>() }]
})
export class LoginComponent extends AuthComponent {

	public formConfig:any = loginFormConfig;

	login(data) {
		this.authenticate('login', data);
	}
}
