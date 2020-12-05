import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  public post<T>(path: string, data: any, extra: boolean = false): Observable<T> {

      return this.http.post<Response>(environment.urlApi + path, data)
      .pipe(map(response => this.processResponse(response)));    

  }

  public get<T>(path: string, parameters: string = ''): Observable<T> {
    return this.http.get<Response>(environment.urlApi + path + parameters )
      .pipe(map(response => this.processResponse(response)));
  }

  public put<T>(path: string, data: any): Observable<T> {
    return this.http.put<Response>(environment.urlApi + path, data)
      .pipe(map(response => this.processResponse(response)));
  }

  private processResponse(response: Response): any {
    console.log(response)
    if (!response) {

    }

    return response;
  }
}
