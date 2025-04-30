import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../../core/services/profile.service';
import { UserProfileGetRes } from '../../../models/user.model';
import { AuthService } from '../../../core/services/AuthService/auth.service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent{
  topSectionBg = 'assets/home-section-img.svg';
  communityBg = 'assets/no-community.svg';

  

}
