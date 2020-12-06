import { User } from './../../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { faHome,faUserAlt,faBars, faChevronDown, faStickyNote, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FaConfig } from '@fortawesome/angular-fontawesome';
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
  faCog= faCog;
  faSignOutAlt =faSignOutAlt;


  math=Math;
  random: number;
  user: User;
  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  this.user = this.authService.getCurrentSession().currentUser; 
  this.random=this.math.floor(this.math.random() * 5);
  }

  logut(){
    this.authService.removeCurrentSession();
    this.router.navigate(['/login']);
  }


}
