import { Component, OnInit } from '@angular/core';
import { UserService } from '@core/services/user.service';

@Component({
  selector: 'mm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	public is_loggedIn:boolean = false;

	constructor(private user:UserService) {
		user.is_loggedIn().subscribe(x => this.is_loggedIn = x);
	}

	ngOnInit() {
	}

}
