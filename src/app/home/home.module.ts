import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';

import { HomecarouselComponent } from './homecarousel/homecarousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms'; 
import { AboutModule } from '../about/about.module';
import { NewsModule } from '../news/news.module';
import { FeaturesModule } from '../features/features.module';
import { ShareModule } from '../general/share/share.module';



@NgModule({
  declarations: [
    HomeComponent,
    HomecarouselComponent,
   
   
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    //AboutModule,
    NewsModule,
    FeaturesModule,
    HomeRoutingModule,
    ShareModule
  ]
})
export class HomeModule { }
