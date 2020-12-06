import { Post } from './../../../../services/post/post.service';
import { User } from './../../../../services/user/user.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from 'src/app/services/post/post.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-post',
  templateUrl: './post-input.component.html',
  styleUrls: ['./post-input.component.scss']
})
export class PostInputComponent implements OnInit {

  formComment: FormGroup;
  user:User;
  @Input() type='post';
  @Input() post: Post;
  @Input() placeholder='What happen?...';
  @Output() createdPost: EventEmitter<void> = new EventEmitter();
  constructor(private formBuilder: FormBuilder,
              private postService: PostService,
              private authService: AuthService) {
    this.user=this.authService.getCurrentSession().currentUser;
  }

  ngOnInit() {
    this.formComment = this.formBuilder.group({
      text: ['', Validators.required],
    });

  }

  sendPost(){

    if(this.formComment.status==='VALID'){
      const data = {
        text: this.formComment.get('text').value,
      }
      switch(this.type){
        case 'post':
          this.postService.sendPost(this.user.id,data).subscribe((response)=>{
            if(response){
              console.log(response);
              this.formComment.get('text').setValue('');
              this.createdPost.emit();
            }
          })
        break;
        case 'comment':
          this.postService.sendComment(this.user.id,this.post.id,data).subscribe((response)=>{
            if(response){
              console.log(response);
              this.formComment.get('text').setValue('');
              this.createdPost.emit();
            }
          })
        break;
      }
    }
  }

}
