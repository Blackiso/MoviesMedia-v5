import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '@shared/shared.module';

import { ProfileComponent } from './profile.component';
import { StatsComponent } from './components/stats/stats.component';
import { ListsComponent } from './components/lists/lists.component';
import { SettingsComponent } from './components/settings/settings.component';


@NgModule({
  declarations: [ProfileComponent, StatsComponent, ListsComponent, SettingsComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule
  ]
})
export class ProfileModule { }
