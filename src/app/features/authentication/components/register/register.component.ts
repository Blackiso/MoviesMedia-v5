import { Component, OnInit } from '@angular/core';
import { registerFormConfig } from '../../config/register-form.config';
import { Subject } from 'rxjs';
import { LOADING } from '@core/classes/Providers';
import { AuthComponent } from '../auth/auth.component';

@Component({
  selector: 'mm-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [{ provide: LOADING, useFactory: ()=> new Subject<any>() }]
})
export class RegisterComponent extends AuthComponent {

	public formConfig:any = registerFormConfig;

	register(data) {
		this.authenticate('register', data);
	}

}
