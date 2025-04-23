import { Component, NgModule } from '@angular/core';
import { FormControl, FormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-login',
  imports: [FormsModule, InputTextModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  // backgroundImg = '@/assets/GIISBG.jpg';
  backgroundImg = 'assets/GIISBG.jpg';
  smartLearnAiImg = 'assets/smartlearn.png';
  giisLogoImg = 'assets/GIIS Logo.png'
  globalSchoolGroupIcon = 'assets/GSG-black.svg'
  
  loginObj : any ={
    username:"",
    password:""
  }
  // protected username = new FormControl<string>('', Validators.required)
}
