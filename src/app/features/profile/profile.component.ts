import { Component, OnInit } from '@angular/core';
import { ProfileNavigationConfig } from './config/profile-navigation.config';

@Component({
  selector: 'mm-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

	public navConfig:any = ProfileNavigationConfig;

	constructor() { }

	ngOnInit() {
	}

}
