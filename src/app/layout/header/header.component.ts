import { Component, OnInit } from '@angular/core';
import { faHome,faUserAlt,faBars, faChevronDown, faStickyNote } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  collapse: boolean = true;
  faHome = faHome;
  faStickyNote = faStickyNote;
  faBars= faBars;
  faChevronDown= faChevronDown;
  users=[
    'https://randomuser.me/api/portraits/thumb/men/33.jpg',
    'https://randomuser.me/api/portraits/thumb/women/48.jpg',
    'https://randomuser.me/api/portraits/thumb/women/64.jpg',
    'https://randomuser.me/api/portraits/thumb/men/2.jpg',
    'https://randomuser.me/api/portraits/thumb/men/90.jpg'
  ];

  math=Math;
  random: number;
  constructor() { }

  ngOnInit() {
  this.random=this.math.floor(this.math.random() * 5);
  }



}
