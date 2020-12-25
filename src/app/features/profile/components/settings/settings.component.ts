import { Component, OnInit } from '@angular/core';
import { updateFromConfig } from '../../config/update-from.config';

@Component({
  selector: 'mm-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

	public formConfig:any = updateFromConfig;

	constructor() { }

	ngOnInit() {
	}

	update(e) {
		
	}
}
