import { Component, OnInit } from '@angular/core';
import { registerFormConfig } from '../../config/register-form.config';

@Component({
  selector: 'mm-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
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
