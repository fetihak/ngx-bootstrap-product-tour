import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxBootstrapTourModule } from '../lib/nmilicic-ngx-bootstrap-tour/ngx-bootstrap-tour.module';
import { TourComponentComponent } from './tour-component/tour-component.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    TourComponentComponent
  ],
  imports: [
    BrowserModule,
    NgxBootstrapTourModule.forRoot(),
    RouterModule.forRoot([{
      component: AppComponent,
      path: '',
    }]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }