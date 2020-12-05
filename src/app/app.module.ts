import { ApiService } from './services/api.service';
import { AuthService } from './services/auth.service';
import { AuthGuard, LoginGuard } from './guards/login.guard';
import { LoginComponent } from './views/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleLayoutComponent, HeaderComponent } from './layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const APP_LAYOUTS = [
  SimpleLayoutComponent
];

const COMPONENTS = [
  HeaderComponent, LoginComponent
];

const APP_SERVICES = [
  AuthService,
  ApiService,

];


@NgModule({
  declarations: [
    AppComponent,
    ...APP_LAYOUTS,
    ...COMPONENTS
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    SimpleNotificationsModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    FormsModule,
    ReactiveFormsModule,
    LoginGuard,
    AuthGuard,
    ...APP_SERVICES
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
