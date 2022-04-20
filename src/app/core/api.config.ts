// const BASE_URL:string = 'http://v5-api.perlnova.com/api/v5';
const BASE_URL:string = 'http://127.0.0.1:8080/api/v5';

export const ENDPOINTS:any = {
	discover: BASE_URL+'/movies/discover/:type',
	details: BASE_URL+'/movies/details/:id',
	filter: BASE_URL+'/movies/filter',
	search: BASE_URL+'/movies/search',

	login: BASE_URL+'/authentication/login',
	register: BASE_URL+'/authentication/register',
	authenticate: BASE_URL+'/authentication/authenticate',

	collection: BASE_URL+'/collection/:type',
	collection_add: BASE_URL+'/collection'
}