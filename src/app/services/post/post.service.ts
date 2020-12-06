import { ApiService } from './../api.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private apiService: ApiService) { }

  getPost(id_user:number ,parameters=''): Observable<any[]> {

    return this.apiService.get<any>(`users/${id_user}/post`,parameters);  
    
  }

  sendPost(id_user:number ,data): Observable<any[]> {

    return this.apiService.post<any>(`users/${id_user}/post`,data);  
    
  }
  
  updatePost(id_user:number ,post_id:number,data): Observable<any[]> {
    return this.apiService.put<any>(`users/${id_user}/post/${post_id}`,data);      
  }
}

export interface Post{
  createdAt: string;
  id: string;
  image: string;
  likes: number;
  link: string;
  loves: number;
  ownerId: number;
  smile: number;
  text: string;
  userId: string;
  fullName: string;
  countComments: number;
}