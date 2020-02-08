import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UtilService {

	constructor(private _router:Router, private ar:ActivatedRoute) { }

	navigateTo(location) {
		let urlArray = location.split('/');
		this._router.navigate(urlArray);
	}

	get activeRoute() {
		return this.ar;
	}

	get router() {
		return this._router;
	}

	generateElemntId() {
		return '_' + Math.random().toString(36).substr(2, 9);
	}

	createQueryParams(obj) {
		let i = 0;
		let querys = "?";
		for (let key in obj) {
			if (i > 0) querys += "&";
			querys += key+"="+obj[key];
			i++;
		}
		return querys;
	}

	createFormData(data) {
		let form = new FormData();
		for(let key in data) {
			form.append(key, data[key]);
		}
		return form;
	}
}
