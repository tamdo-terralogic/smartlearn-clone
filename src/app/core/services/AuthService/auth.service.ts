import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ConfirmObject, LoginObject } from '../../../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  http = inject(HttpClient);
  constructor(private router: Router) {

  }

  

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggin():boolean{
    return this.getToken()!= null;
  }

  logout():void{
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
  
  login(loginObj: LoginObject) {
    const url = `${environment.APIKEY}/Login/LoginUser`;
    return this.http.post(url, loginObj);
  }

 
  confirmOtp(confirmOtpObj: ConfirmObject){
    const url = `${environment.APIKEY}/Login/VerifyLoginUserOPT`;
    return this.http.post(url,confirmOtpObj);
  }
}
