import { AuthService } from './../../services/auth.service';
import { User, UserService } from './../../services/user/user.service';
import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  faEye=faEye;
  formLogin:FormGroup;
  hide = true;
  constructor(@Inject(DOCUMENT) private _document, 
              private formBuilder: FormBuilder,
              private userService: UserService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this._document.body.classList.add('login-background');

    this.formLogin = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.userService.getUsers('?page=1&limit=1').subscribe((response)=>{
      console.log(response);
      if(response){ 
        this.formLogin.patchValue(response[0])
      }
    });
  }
  
  login(){
    
    this.markFormGroupTouched(this.formLogin);
    console.log(this.formLogin);
    if(this.formLogin.status==='VALID'){
      const paramet=`?email=${this.formLogin.get('email').value}&password=${this.formLogin.get('password').value}`
      this.userService.getUsers(paramet).subscribe((response:User[])=>{
        console.log(response);
        if(response){ 
          this.authService.setSession(response[0]);          
          this.router.navigate(['/publicaciones']);
        }
      });
    }
  }
  private markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }
  
  ngOnDestroy() {    
    console.log('destroy');
    this._document.body.classList.add('login-background');
  }
}
