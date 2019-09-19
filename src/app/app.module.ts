import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { BarsComponent } from './bars.component';
import { BarDetailComponent } from './bar-detail.component';
import { BarService } from './bar.service';

@NgModule({
  imports:      [ 
  	BrowserModule,
  	FormsModule,
  	RouterModule.forRoot([
  	  {
  	  	path: 'bars',
  	  	component: BarsComponent
  	  }
  	])
  ],
  declarations: [ 
  	AppComponent, 
  	BarsComponent, 
  	BarDetailComponent 
  ],
  providers: [ BarService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
