import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about/about.component';
import {MatButtonModule} from '@angular/material/button';
import { ShareModule } from '../general/share/share.module';

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    MatButtonModule,
    ShareModule
  ],
  exports:[
    AboutComponent
  ]
})
export class AboutModule { }
