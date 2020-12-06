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
  constructor() { }

  ngOnInit() {
  }

}
