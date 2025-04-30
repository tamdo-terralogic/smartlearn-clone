import { Component, OnInit } from '@angular/core';
import { SelectModule } from 'primeng/select';
import { ProfileService } from '../../services/profile.service';
import { AuthService } from '../../services/AuthService/auth.service';
import { UserProfileGetRes } from '../../../models/user.model';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [SelectModule, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
  avatar: string | undefined;
  name: string | undefined;
  designation: string | undefined;
  emailData: string| undefined;
  ramcoEmpCode: string | undefined;
  employeeLevel: string | undefined;
  country: string | undefined;
  logoImg = 'assets/appIcon.svg';
  chat = 'assets/chat.svg';
  more = 'assets/more.svg';
  email = 'assets/email.svg';
  calendar = 'assets/calendar.svg';
  globe = 'assets/globe.svg';
  smartlearn = 'assets/smartlearn.png';
  dotMenu = 'assets/dots-menu.svg';
  userIdSvg = 'assets/user-id.svg';
  chartSvg = 'assets/chart.svg';
  worldSvg = 'assets/world.svg';
  showDropdown = false;
  constructor(private profileService: ProfileService, private authService: AuthService) {}
  ngOnInit() {
    this.getProfile();
  }
  userProfile: UserProfileGetRes | null = null;
  getProfile() {
    this.profileService.getProfile().subscribe({
      next: (res: UserProfileGetRes) => {
        this.userProfile = res; 
        this.avatar = res.profilePicURL; 
        this.name = res.firstName +" " + res.lastName;
        this.designation = res.designation;
        this.emailData = res.email;
        this.ramcoEmpCode = res.ramcoEmpCode;
        this.employeeLevel = res.employeeLevel;
        this.country = res.country;
      },
      error: (err) => {
        console.error('Error fetching profile', err);
        this.authService.logout()
      }
    });
  }

  handleShowDropdown(){
    this.showDropdown = !this.showDropdown;
  }

  handleLogout(){
    this.authService.logout();
  }
  

}
