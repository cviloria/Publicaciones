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
  
  updatePost(id_user:number ,post_id:string, data): Observable<any[]> {
    return this.apiService.put<any>(`users/${id_user}/post/${post_id}`,data);      
  }

  getCommentsByPost(id_user:number,post_id: string, parameters=''): Observable<any[]> {
    return this.apiService.get<any>(`users/${id_user}/post/${post_id}/comments`,parameters);  

  }

  sendComment(id_user:number,post_id:string,data): Observable<any[]> {

    return this.apiService.post<any>(`users/${id_user}/post/${post_id}/comments`,data);  
    
  }
  updateComment(id_user:number ,post_id:string,id_comment:string, data): Observable<any[]> {
    return this.apiService.put<any>(`users/${id_user}/post/${post_id}/comments/${id_comment}`,data);      
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

export interface Comment{
  createdAt: string;
  fullName: string;
  id: string;
  likes: number;
  loves: number;
  owner: number;
  postId: string;
  smile: number;
  text: string;
  countComments: number;
}

export interface Reaction{
  likes?: boolean;
  loves?: boolean;
  smile?: boolean;
}