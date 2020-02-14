import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { StatsComponent } from './components/stats/stats.component';
import { ListsComponent } from './components/lists/lists.component';
import { SettingsComponent } from './components/settings/settings.component';


const routes: Routes = [
	{
		path: '',
		component: ProfileComponent,
		children: [
			{
				path: '',
				component: StatsComponent
			},
			{
				path: 'stats',
				component: StatsComponent
			},
			{
				path: 'lists',
				component: ListsComponent
			},
			{
				path: 'settings',
				component: SettingsComponent
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }