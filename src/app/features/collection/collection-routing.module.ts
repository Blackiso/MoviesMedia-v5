import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollectionComponent } from './collection.component';
import { WatchedComponent } from './components/watched/watched.component';
import { WatchListComponent } from './components/watch-list/watch-list.component';
import { RecommendationsComponent } from './components/recommendations/recommendations.component';


const routes: Routes = [
	{
		path: '',
		component: CollectionComponent,
		children: [
			{
				path: '',
				redirectTo: 'watched',
				pathMatch: 'full'
			},
			{
				path: 'watched',
				component: WatchedComponent
			},
			{
				path: 'watch-list',
				component: WatchListComponent
			},
			{
				path: 'recommendations', 
				component: RecommendationsComponent
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionRoutingModule { }
