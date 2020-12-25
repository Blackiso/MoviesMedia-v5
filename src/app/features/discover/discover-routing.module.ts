import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiscoverComponent } from './discover.component';
import { NowPlayingComponent } from './components/now-playing/now-playing.component';
import { PopularComponent } from './components/popular/popular.component';
import { UpcomingComponent } from './components/upcoming/upcoming.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
	{
		path: '',
		component: DiscoverComponent,
		children: [
			{
				path: '',
				redirectTo: 'now-playing',
				pathMatch: 'full'
			},
			{
				path: 'now-playing',
				component: NowPlayingComponent
			},
			{
				path: 'popular',
				component: PopularComponent
			},
			{
				path: 'upcoming',
				component: UpcomingComponent
			},
			{
				path: 'search',
				component: SearchComponent
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiscoverRoutingModule { }
