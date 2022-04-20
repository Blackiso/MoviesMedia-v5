import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilService } from '@core/services/util.service';
import { ENDPOINTS } from '../api.config';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

	private params:any = {}; 

	constructor(private http:HttpClient, private util:UtilService) {}

	getMovies(type, page = 1) {
		return this.http.get<any>(this.buildUrl(ENDPOINTS.discover, { page }).replace(':type', type));
	}

	getMovie(id:number) {
		return this.http.get<any>(ENDPOINTS.details.replace(':id', id));
	}

	getFilterMovies(filter, page = 1) {
		filter.page = page;
		return this.http.get<any>(this.buildUrl(ENDPOINTS.filter, filter));
	}

	buildUrl(url:string, params:any) {
		return url+this.util.createQueryParams(params);;
	}

	addMovieToCollection(id:number, collection:{ watchlist:boolean; watched:boolean }, type:string) {
		collection[type] = !collection[type];

		if (collection.watchlist == collection.watched && collection.watched == true) {
			for(let key in collection) {
				if (key !== type) collection[key] = false;
			}
		}

		return this.http.post(ENDPOINTS.collection_add, {
			id,
			watchlist: collection.watchlist,
			watched: collection.watched
		});
	}

}
