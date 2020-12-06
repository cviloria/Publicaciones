import { Reaction } from './../../../../services/post/post.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-reactions',
  templateUrl: './reactions.component.html',
  styleUrls: ['./reactions.component.scss']
})
export class ReactionsComponent implements OnInit {

@Input() likes:number;
@Input() smile:number;
@Input() loves:number;
@Input() countComments:number;
@Input() showLeyend=true;
@Output() OnShow: EventEmitter<boolean> = new EventEmitter();
@Output() OnReaction: EventEmitter<Reaction> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  reaction(type){
    switch(type){
      case 'likes':
        this.OnReaction.emit({likes:true});
      break;     
      case 'smiles':
        this.OnReaction.emit({smile:true});
      break;      
      case 'loves':
        this.OnReaction.emit({loves:true});
      break;
    }
  }
}
