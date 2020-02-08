import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { DiscoverRoutingModule } from './movie-details-routing.module';

import { MovieDetailsComponent } from './movie-details.component';
import { CastComponent } from './components/cast/cast.component';
import { MoreMoviesComponent } from './components/more-movies/more-movies.component';



@NgModule({
  declarations: [MovieDetailsComponent, CastComponent, MoreMoviesComponent],
  imports: [
    CommonModule,
    SharedModule,
    DiscoverRoutingModule
  ],
  exports: [MovieDetailsComponent]
})
export class MovieDetailsModule { }
