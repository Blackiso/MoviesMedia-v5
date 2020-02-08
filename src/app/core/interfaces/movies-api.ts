export interface MoviesApi {
	getMovies(type:string, page?:number):any;
	setParams(params:object):void;
	clearParams():void;
}
