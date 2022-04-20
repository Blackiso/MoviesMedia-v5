import { Injectable, Injector } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UtilService {

	constructor(private _injector:Injector) { }

	navigateTo(location, querys = {}) {
		if (typeof location === 'string') {
			location = location.split('/');

			if (location[0] == '') {
				location.shift();
				location[0] = '/'+location[0];
			}
		}
		this.router.navigate(location, { queryParams: querys });
	}

	get activeRoute() {
		return this._injector.get(ActivatedRoute);
	}

	get router() {
		return this._injector.get(Router);
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

	goToAuth(url, back?) {
		let currentUrl = back ? back : window.location.pathname+window.location.search;
		this.router.navigate(url.split('/'), { queryParams: { back: btoa(currentUrl) } });
	}
}
