import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news/news.component';
import { ClientComponent } from './client/client.component';


@NgModule({
  declarations: [
    NewsComponent,
    ClientComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule
  ],
  exports:[
    NewsComponent
  ]
})
export class NewsModule { }
