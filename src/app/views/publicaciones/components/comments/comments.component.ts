import { Post, PostService,Comment } from './../../../../services/post/post.service';
import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/services/user/user.service';

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
              private authService: AuthService) {
    this.user=this.authService.getCurrentSession().currentUser;
   }

  ngOnInit() {
    console.log('comentario post',this.post);
    this.loadComments();
  }

  loadComments(parameters='?sortBy=id&order=desc'){
    this.postService.getCommentsByPost(this.user.id,this.post.id,parameters).subscribe((response)=>{
      if(response){
        this.comments=response;
      }
      this.loadData=false;
    });
  }

}
