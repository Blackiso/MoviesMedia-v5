import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouteReuseStrategy } from '@angular/router';
import { CustomRouteReuseStategy } from '@core/classes/CustomRouteReuseStategy';
import { AuthenticationGuard } from '@core/guardes/authentication.guard';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	},
	{
		path: 'discover',
		loadChildren: () => import('@features/discover/discover.module').then(m => m.DiscoverModule)
	},
	{
		path: 'collection',
		loadChildren: () => import('@features/collection/collection.module').then(m => m.CollectionModule),
		canLoad: [AuthenticationGuard],
		canActivate: [AuthenticationGuard]
	},
	{
		path: 'movie/:movie-id',
		loadChildren: () => import('@features/movie-details/movie-details.module').then(m => m.MovieDetailsModule),
		data: {
			overlay: false
		}
	},
	{
		path: 'movie/:movie-id',
		loadChildren: () => import('@features/movie-details/movie-details.module').then(m => m.MovieDetailsModule),
		outlet: 'overlay',
		data: {
			overlay: true,
			noReuse: true
		}
	},
	{
		path: 'home',
		loadChildren: () => import('@features/home/home.module').then(m => m.HomeModule)
	},
	{
		path: 'auth',
		loadChildren: () => import('@features/authentication/authentication.module').then(m => m.AuthenticationModule),
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [{	provide: RouteReuseStrategy, useClass: CustomRouteReuseStategy }],
  exports: [RouterModule]
})
export class AppRoutingModule { }
