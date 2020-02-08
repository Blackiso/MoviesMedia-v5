import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavigationComponent } from './components/navigation/navigation.component';
import { MovieComponent } from './components/movie/movie.component';
import { FilterComponent } from './components/filter/filter.component';
import { SubNavigationComponent } from './components/sub-navigation/sub-navigation.component';
import { YoutubeVideoComponent } from './components/youtube-video/youtube-video.component';
import { SliderComponent } from './components/slider/slider.component';
import { ScrollBottomDirective } from './directives/scroll-bottom.directive';
import { MoviesContainerComponent } from './components/movies-container/movies-container.component';
import { FormsDirective } from './directives/forms.directive';
import { LoadingComponent } from './components/loading/loading.component';
import { ToggleElementDirective } from './directives/toggle-element.directive';


@NgModule({
  declarations: [
  	NavigationComponent,
  	MovieComponent,
  	FilterComponent,
  	SubNavigationComponent,
  	YoutubeVideoComponent,
  	SliderComponent,
  	ScrollBottomDirective,
  	MoviesContainerComponent,
  	FormsDirective,
  	LoadingComponent,
  	ToggleElementDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
  	NavigationComponent,
    MovieComponent,
    FilterComponent,
    SubNavigationComponent,
    YoutubeVideoComponent,
    SliderComponent,
    ScrollBottomDirective,
    MoviesContainerComponent,
    FormsDirective,
    ToggleElementDirective
  ]
})
export class SharedModule { }
