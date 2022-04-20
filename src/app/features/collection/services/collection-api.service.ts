import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilService } from '@core/services/util.service';
import { MoviesApi } from '@core/interfaces/movies-api';
import { ENDPOINTS } from '@core/api.config';
import { FilterObject } from '@shared/interfaces';


@Injectable()
export class CollectionApiService implements MoviesApi {
	
	private url:string = ENDPOINTS.collection;
	private params:any = {}; 

	constructor(private http:HttpClient, private util:UtilService) {}

	getMovies(type:string, page:number = 1, filterObject:FilterObject = {}) {
		this.params = filterObject;
		this.params.page = page;

		let url = this.buildUrl(type);
		return this.http.get<any>(url);
	}

	buildUrl(type) {
		return (this.url+this.util.createQueryParams(this.params)).replace(':type', type);
	}

}
