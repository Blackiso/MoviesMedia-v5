import { FilterObject } from "@shared/interfaces";

export interface MoviesApi {
	getMovies(type:string, page:number, filterObject:FilterObject):any;
}
