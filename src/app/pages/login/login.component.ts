import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { PageServiceService } from "../page-service.service";

import { ToastrService } from 'ngx-toastr';
import { ToasterService } from 'angular2-toaster';
import { AuthService, GoogleLoginProvider } from 'angular4-social-login';
 @Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login_form: any;
  user: any;
  constructor(private data_service: PageServiceService, private _socioAuthServ: AuthService, private toastr: ToastrService, private router: Router) {

    const email = new FormControl('', Validators.required);
    const password = new FormControl('', Validators.required);

    this.login_form = new FormGroup({
      email: email,
      password: password
    })
   }

  ngOnInit() {
  }
  singIn(platform : string): void {
    platform = GoogleLoginProvider.PROVIDER_ID;
    this._socioAuthServ.signIn(platform).then(
      (response) => {
        console.log(platform + " logged in user data is= " , response);
        this.user = response;
      }
    );
  }
  signOut(): void {
    this._socioAuthServ.signOut();
    this.user = null;
    console.log('User signed out.');
  }

  loginAttempt(){
    console.log(this.login_form.value);
    this.data_service.loginAttempt(this.login_form.value).subscribe(response => {

      console.log(response);
      localStorage.setItem('angaza_admin_token', response['access_token']);
      this.showSuccess();
      this.router.navigate(['pages/create-school']);
    }, err => {
      console.log(err);
      this.showFail();
    })
  }
  showSuccess() {
    this.toastr.success('Success', 'Login Successful');
  }
  showFail() {
    this.toastr.error('Failed', 'Invalid Credentials');
  }
}
