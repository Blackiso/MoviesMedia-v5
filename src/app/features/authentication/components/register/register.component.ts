import { Component, OnInit } from '@angular/core';
import { registerFormConfig } from '../../config/register-form.config';
import { Subject } from 'rxjs';
import { LOADING } from '@core/classes/Providers';

@Component({
  selector: 'mm-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [{ provide: LOADING, useFactory: ()=> new Subject<any>() }]
})
export class RegisterComponent implements OnInit {

	public formConfig:any = registerFormConfig;

	constructor() { }

	ngOnInit() {
	}

	register(data) {
		console.log(data);
	}

}
