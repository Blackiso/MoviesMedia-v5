import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscoverRoutingModule } from './discover-routing.module';
import { SharedModule } from '@shared/shared.module';

import { DiscoverService } from './services/discover.service';

import { NowPlayingComponent } from './components/now-playing/now-playing.component';
import { PopularComponent } from './components/popular/popular.component';
import { UpcomingComponent } from './components/upcoming/upcoming.component';
import { SearchComponent } from './components/search/search.component';
import { DiscoverComponent } from './discover.component';



@NgModule({
  declarations: [NowPlayingComponent, PopularComponent, UpcomingComponent, SearchComponent, DiscoverComponent],
  imports: [
    CommonModule,
    DiscoverRoutingModule,
    SharedModule
  ],
  providers: [DiscoverService]
})
export class DiscoverModule { }
