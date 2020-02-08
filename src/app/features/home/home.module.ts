import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '@shared/shared.module';

import { HomeComponent } from './home.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { CategorysComponent } from './components/categorys/categorys.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [HomeComponent, FeaturedComponent, CategorysComponent, FooterComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
