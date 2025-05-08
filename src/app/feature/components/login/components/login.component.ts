import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';


import { MessageService } from 'primeng/api';
import { AuthService } from '../../../../core/services/AuthService/auth.service';
import { ConfirmObject, LoginObject, LoginResponse } from '../../../../models/login.model';
import { getRandomArbitrary } from '../../../../../util/RandomBetweenTwoValue';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { InputOtpModule } from 'primeng/inputotp';
import { NgIf } from '@angular/common';
import { Toast, ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: false,
  // imports:[
  //   FormsModule, InputTextModule, ButtonModule, PasswordModule, InputOtpModule, NgIf, ToastModule
  // ]

 // encapsulation: ViewEncapsulation.None, // <-- add this

})

export class LoginComponent {
  authService = inject(AuthService);
  isConfirm = (false);
  maskedPhone = signal("");
  maskedEmail = signal("");
  // backgroundImg = '@/assets/GIISBG.jpg';
  backgroundImg = 'assets/GIISBG.jpg';
  smartLearnAiImg = 'assets/smartlearn.png';
  giisLogoImg = 'assets/GIIS Logo.png'
  globalSchoolGroupIcon = 'assets/GSG-black.svg';
  googlePlaySvg = 'assets/google-playstore.svg';
  appleStoreSvg = 'assets/app-store.svg'
  isMobile: boolean = false;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize.bind(this));
  }


  checkScreenSize() {
    this.isMobile = window.innerWidth <= 768;
  }

  show(severity: string, summary: string, detail: string, life: number) {
    this.messageService.add({ severity: severity, summary: summary, detail: detail, life: life });
  }

  loginObj: LoginObject = {
    email: "",
    password: "",
    brandID: 0,
    isSendEmail: true,
    lDeviceDetails: {
      "deviceId": "",
      "deviceName": "",
      "deviceType": "",
      "latitude": 0,
      "longitude": 0,
      "deviceToken": "",
      "appVersion": "",
      "osVersion": "",
      "firebaseToken": "",
      "deviceAddress": "",
      "Location": ""
    },
    source: "web",

  }

  deviceDetails = {
    "deviceId": "",
    "deviceName": "",
    "deviceType": "",
    "latitude": 0,
    "longitude": 0,
    "deviceToken": "",
    "appVersion": "",
    "osVersion": "",
    "firebaseToken": "",
    "deviceAddress": "",
    "Location": ""
  }

  uuid = "d520c7a8-421b-4563-b955-f5abc56b97ec__115.78.238.133__Chrome__false__Microsoft Windows__Windows 10.0"
  confirmObj: ConfirmObject = {
    loginEmailId: "",
    loginOpt: "",
    brandID: 1,
    campusID: 1,
    lDeviceDetails: {
      "deviceId": "",
      "deviceName": "",
      "deviceType": "",
      "latitude": 0,
      "longitude": 0,
      "deviceToken": "",
      "appVersion": "",
      "osVersion": "",
      "firebaseToken": "",
      "deviceAddress": "",
      "Location": ""
    },
    loginPhoneno: "",
    userId: 0,
    userName: "",
    uuid: "",
    source: "web",

  }

  loginResObj: LoginResponse = {
    userName: null,
    emailOrPhone: null,
    userId: null,
    email: null,
    phoneNo: null,
    loginEmailId: null,
    loginPhoneNo: null,
    token: null,
  }

  // http = inject(HttpClient);

  get isConfirmValue() {
    return this.isConfirm;
  }

  changeIsConfirmState(state: boolean) {
    this.isConfirm = (state)
  }


  maskSensitiveInfo(input: string | null): string {
    if (input === "" || input === null) return ""
    if (input.includes('@')) {
      // Mask email
      const [name, domain] = input.split('@');
      if (name.length <= 2) return '*@' + domain;
      const maskedName = name.substring(0, 2) + '*'.repeat(getRandomArbitrary(5, 7));
      return `${maskedName}@${domain}`;
    } else if (input.startsWith('+')) {
      // Mask phone
      const prefixMatch = input.match(/^\+?\d+-?/);
      const prefix = prefixMatch ? prefixMatch[0] : '';
      const rest = input.replace(prefix, '');
      if (rest.length <= 4) return prefix + '*'.repeat(getRandomArbitrary(5, 7));
      const masked = '*'.repeat(getRandomArbitrary(5, 7)) + rest.slice(-3);
      return prefix + masked;
    } else {
      return input;
    }
  }

  onLogin() {
    this.authService.login(this.loginObj).subscribe({
      next: (res: any) => {
        if (res) {
          this.loginResObj = {
            userName: res.userName || null,
            emailOrPhone: res.emailOrPhone || null,
            userId: res.userId || null,
            email: res.email || null,
            phoneNo: res.phoneNo || null,
            loginEmailId: res.loginEmailId || null,
            loginPhoneNo: res.loginPhoneNo || null,
            token: res.token || null,
          };
          this.changeIsConfirmState(true);
          this.maskedPhone = signal(this.maskSensitiveInfo(this.loginResObj.phoneNo));
          this.maskedEmail = signal(this.maskSensitiveInfo(this.loginResObj.email));
          this.confirmObj = {
            brandID: 1,
            campusID: 1,
            lDeviceDetails: this.deviceDetails,
            loginEmailId: this.loginResObj.email || "",
            loginPhoneno: this.loginResObj.phoneNo || "",
            userId: this.loginResObj.userId || null,
            uuid: this.uuid,
            source: "web",
            userName: this.loginResObj.userName || "",
            loginOpt: "",
          }
        } else {
          this.show('error','Error Login','Login Failed', 3000);
        }
      },
      error: (err) => {
        console.error('Login error:', err);
        this.show('error','Login failed','Login failed: Invalid credentials or server error.', 3000);
        }
    });
  }


  onConfirm() {
    this.authService.confirmOtp(this.confirmObj).subscribe({
      next: (res: any) => {
        if (res) {
          this.authService.setToken(res.token);
          this.router.navigateByUrl('dashboard');
          this.show('success','Login successfully','Website will navigate to dashboard', 3000);

        }
      },
      error: (err) => {
        this.show('error','Error','Wrong OTP', 3000);
      }
    })
  };


  router = inject(Router);
  // protected username = new FormControl<string>('', Validators.required)
}
