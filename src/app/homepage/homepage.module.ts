import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { HomepagecardComponent } from './homepagecard/homepagecard.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomepageComponent,
    HomepagecardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomepageComponent,
    HomepagecardComponent
  ]
})
export class HomepageModule { }
