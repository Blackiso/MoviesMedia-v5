import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionRoutingModule } from './collection-routing.module';
import { SharedModule } from '@shared/shared.module';

import { CollectionApiService } from './services/collection-api.service';


import { CollectionComponent } from './collection.component';
import { WatchedComponent } from './components/watched/watched.component';
import { WatchListComponent } from './components/watch-list/watch-list.component';
import { RecommendationsComponent } from './components/recommendations/recommendations.component';



@NgModule({
  declarations: [CollectionComponent, WatchedComponent, WatchListComponent, RecommendationsComponent],
  imports: [
    CommonModule,
    CollectionRoutingModule,
    SharedModule
  ],
  providers: [CollectionApiService]
})
export class CollectionModule { }
