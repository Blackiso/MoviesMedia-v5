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
import { FormComponent } from './components/form/form.component';
import { ButtonComponent } from './components/button/button.component';
import { MoneyPipe } from './pipes/money.pipe';
import { RuntimePipe } from './pipes/runtime.pipe';
import { YearPipe } from './pipes/year.pipe';
import { TextPipe } from './pipes/text.pipe';
import { SafePipe } from './pipes/safe.pipe';
import { ListSliderComponent } from './components/list-slider/list-slider.component';


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
  	ToggleElementDirective,
    FormComponent,
    ButtonComponent,
    MoneyPipe,
    RuntimePipe,
    YearPipe,
    TextPipe,
    SafePipe,
    ListSliderComponent
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
    ToggleElementDirective,
    FormComponent,
    ButtonComponent,
    MoneyPipe,
    RuntimePipe,
    YearPipe,
    TextPipe,
    SafePipe,
    ListSliderComponent
  ]
})
export class SharedModule { }
