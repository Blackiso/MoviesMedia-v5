import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilService } from '@core/services/util.service';
import { MoviesApi } from '@core/interfaces/movies-api';
import { ENDPOINTS } from '@core/api.config';
import { FilterObject } from '@shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DiscoverService implements MoviesApi {

	private params:any = {}; 

	constructor(private http:HttpClient, private util:UtilService) {}

	getMovies(type, page = 1, filterObject:FilterObject = {}) {
		this.params = filterObject;
		this.params.page = page;
		let url = type == 'search' ? ENDPOINTS.search : ENDPOINTS.discover.replace(':type', type);
		return this.http.get<any>(this.buildUrl(url));
	}

	getFilterMovies(filter, page = 1) {
		// filter.page = page;
		// return this.http.get<any>(this.buildUrl(ENDPOINTS.filter, filter));
	}

	getSearchMovies(keyword, page = 1) {
		// return this.http.get<any>(this.buildUrl(ENDPOINTS.search, { page, keyword }));
	}

	buildUrl(url:string):string {
		return url+this.util.createQueryParams(this.params);
	}

}


   