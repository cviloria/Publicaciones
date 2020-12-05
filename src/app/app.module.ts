import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleLayoutComponent, HeaderComponent } from './layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


const APP_LAYOUTS = [
  SimpleLayoutComponent
];

const COMPONENTS = [
  HeaderComponent
];
@NgModule({
  declarations: [
    AppComponent,
    ...APP_LAYOUTS,
    ...COMPONENTS
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
