import { User } from './user/user.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private localStorageService;
  private currentSession : Session = null;
  
  constructor() { 
    this.localStorageService = sessionStorage;
    this.currentSession = this.loadSessionData();
  }

  public isAuthenticated(): boolean {
    const session = this.localStorageService.getItem('currentUser');

    return session? true:false;
  }

  public setSession(user:User , token=null): void{
    const $user  = { currentUser : user,
                     token : token,
                   } ;
    this.currentSession = Object.assign({}, $user);
    this.localStorageService.setItem('currentUser', JSON.stringify(user));
    this.localStorageService.setItem('token', token);
  }

  loadSessionData(): Session{
    const session = {
                      currentUser : JSON.parse(this.localStorageService.getItem('currentUser')),
                      token : this.localStorageService.getItem('token')
                    }

    return (session) ? <Session> session : null;
  }

  getCurrentSession(): Session {
    return this.currentSession;
  }

  removeCurrentSession(): void {
    this.localStorageService.removeItem('currentUser');
    this.localStorageService.removeItem('token');
    this.currentSession = null;
  }
}

export interface Session{
  currentUser: User;
  token?: string;
}