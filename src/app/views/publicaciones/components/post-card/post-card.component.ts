import { NotificationsService } from 'angular2-notifications';
import { Helper } from './../../../../core/helper';
import { AuthService } from 'src/app/services/auth.service';
import { Post, PostService } from './../../../../services/post/post.service';
import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

  @Input() post:Post;
  showComments=false;
  user: User;
  constructor(private postService: PostService,
              private authService: AuthService,
              private helper: Helper,
              private notificationsService: NotificationsService) { 
    this.user=this.authService.getCurrentSession().currentUser;
  }

  ngOnInit() {
  }

  reaction(event){
    this.post[Object.keys(event)[0]]++;

    this.postService.updatePost(this.user.id,this.post.id,Object.assign({}, this.post)).subscribe((response)=>{
      if(response){      
        this.notificationsService.success('Good..', 'Post update success.', this.helper.optionsNotify);
      }
    });
  }
}
