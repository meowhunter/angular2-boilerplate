import 'zone.js';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { RouterModule }  from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/main', pathMatch: 'full' },
      { path: 'main', loadChildren: './states/main/index#MainStateModule' },
      { path: 'team', loadChildren: './states/team/index#MainStateModule' },
      { path: 'about', loadChildren: './states/about/index#MainStateModule?sync=true' },
    ])
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }