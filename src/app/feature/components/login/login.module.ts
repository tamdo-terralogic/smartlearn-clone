import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { InputOtpModule } from 'primeng/inputotp';
import { ToastModule } from 'primeng/toast';
import { LoginComponent } from './components/login.component';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule, InputTextModule, ButtonModule, PasswordModule, InputOtpModule, ToastModule
  ],
  exports: [LoginComponent],
})
export class LoginModule { }
