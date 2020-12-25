import { Injectable, Injector } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UtilService {

	constructor(private _injector:Injector) { }

	navigateTo(location) {
		// if(x) location = location.split('/');
		this.router.navigate([location]);
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
