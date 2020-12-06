import { Helper } from './../core/helper';
import { environment } from './../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map} from 'rxjs/operators';
import { NotificationsService } from 'angular2-notifications';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private notificationsService: NotificationsService,
    private helper: Helper
  ) { }

  public post<T>(path: string, data: any, extra: boolean = false): Observable<T> {

      return this.http.post<Response>(environment.urlApi + path, data)
      .pipe(
            map(response => this.processResponse(response)),
            catchError(this.handleError.bind(this))
          );    

  }

  public get<T>(path: string, parameters: string = ''): Observable<T> {
    return this.http.get<Response>(environment.urlApi + path + parameters )
      .pipe(
            map(response => this.processResponse(response)),
            catchError(this.handleError.bind(this))
      );
  }

  public put<T>(path: string, data: any): Observable<T> {
    return this.http.put<Response>(environment.urlApi + path, data)
      .pipe(
        map(response => this.processResponse(response)),
        catchError(this.handleError.bind(this))
      );
  }




  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {    
      console.error('An error occurred:', error.error.message);
    } else {
      const codeInvalid=[400,404];
      let menssage =''
      if(typeof error.error ==='object'){
        if(error.error.msg){
          menssage= error.error.msg;
        }else{
          menssage= JSON.stringify(error.error);
        }
      }else{
        menssage= error.error
      }
      if (codeInvalid.includes(error.status)) {
        this.notificationsService.warn('Oppps,', menssage, this.helper.optionsNotify);
      }
      if(error.status==500){
        this.notificationsService.error('Oppps,', menssage, this.helper.optionsNotify);
      }
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }   
    return throwError(
      'Something bad happened; please try again later.');
  }




  private processResponse(response: any): any {     
    return response;
  }
}
