import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilService } from '@core/services/util.service';
import { MoviesApi } from '@core/interfaces/movies-api';


@Injectable()
export class CollectionApiService implements MoviesApi {
	
	private url:string = "http://localhost/mm-mock/movies-list.php";
	private params:any = {}; 

	constructor(private http:HttpClient, private util:UtilService) {}

	getMovies(type, page?) {
		if (page) {
			this.params.page = page;
		}else {
			delete this.params.page;
		}
		this.params.type = type;
		return this.http.get<any>(this.buildUrl());
	}

	buildUrl() {
		return this.url+this.util.createQueryParams(this.params);;
	}

	setParams(params) {
		this.params = {...this.params, ...params};
	}

	clearParams() {
		this.params = {};
	}
}
