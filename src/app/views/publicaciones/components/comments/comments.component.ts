import { NotificationsService } from 'angular2-notifications';
import { Post, PostService,Comment } from './../../../../services/post/post.service';
import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/services/user/user.service';
import { Helper } from 'src/app/core/helper';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  @Input() post:Post;

  comments:Comment[]=[];
  loadData = true;
  user:User;
  constructor(private postService: PostService,
              private authService: AuthService,
              private notificationsService: NotificationsService, 
              private helper: Helper 
              ) {
    this.user=this.authService.getCurrentSession().currentUser;
   }

  ngOnInit() {
    this.loadComments();
  }

  loadComments(parameters='?sortBy=id&order=desc'){
    this.loadData=true;
    this.postService.getCommentsByPost(this.user.id,this.post.id,parameters).subscribe((response)=>{
      if(response){
        this.comments=response;
      }
      setTimeout(()=>{this.loadData=false},1000 );
    });
  }

  reaction(event,comment){
    comment[Object.keys(event)[0]]++;
    this.postService.updateComment(this.user.id,this.post.id,comment.id,Object.assign({}, comment)).subscribe((response)=>{
      if(response){      
        this.notificationsService.success('Good..', 'Comment update success.', this.helper.optionsNotify);
      }
    });
  }

}
