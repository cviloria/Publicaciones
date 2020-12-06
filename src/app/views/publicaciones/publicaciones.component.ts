import { User } from './../../services/user/user.service';
import { PostService } from './../../services/post/post.service';
import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: '0' }),
        animate('2s ease-out', style({ opacity: '1' })),
      ]),
    ]),
  ],
})
export class PublicacionesComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private _document,
              private postService: PostService,
              private authService: AuthService) {
                this.user=this.authService.getCurrentSession().currentUser;
               }
  user:User;
  posts:any[];
  loadData = true; 
  page=1;
  $showMore=true;
  ngOnInit() {
    this._document.body.classList.remove('login-background');
    this.loadPost();

  }

  loadPost(){
    this.postService.getPost(this.user.id,`?page=${this.page}&limit=5&sortBy=id&order=desc`).subscribe((response)=>{
      this.loadData = false;
      if(response.length>0){
        if(this.page===1){
          this.posts = response;
        }else{
          this.posts=this.posts.concat(response);
        }
      }else{
        this.$showMore=false;
      }
    });
  }

  showMore(){
    this.page++;
    this.loadPost();
  }
}
