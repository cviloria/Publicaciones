import { ApiService } from './../api.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private apiService: ApiService) { }


  getUsers(parameters=''): Observable<User[]> {

    return this.apiService.get<any>('users',parameters);  
    
  }
}

export interface User{
  avatar: string;
  createdAt: string;
  dateOfBirth: string;
  email: string;
  id: number;
  name: string;
  password: string;
  registerDate: string;
}