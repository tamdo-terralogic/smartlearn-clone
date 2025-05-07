import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../../core/services/profile.service';
import { UserProfileGetRes } from '../../../models/user.model';
import { AuthService } from '../../../core/services/AuthService/auth.service';
import { CarouselModule } from 'primeng/carousel';


interface Card {
  id: string,
  icon: string,
  header: string,
  content: string
}

@Component({
  selector: 'app-dashboard',
  imports: [CarouselModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})

export class DashboardComponent{
  topSectionBg = 'assets/home-section-img.svg';
  communityBg = 'assets/no-community.svg';
  emailIcon = 'assets/email-icon.svg';
  calendarIcon = 'assets/calendar-primary.svg';
  messageIcon = 'assets/suggest-msg.svg';
  riseTicketIcon = 'assets/rise-ticket.svg';
  eNoticeIcon = 'assets/e-notice.svg';
  cards: Card[] = [
    {
      id: '1',
      icon: this.messageIcon,
      header: 'SmartConnect - Message',
      content: 'Message will help you to connect with Teachers/Parent/Student easily and get informed with all communication from the schools and Smartlearn system.'
  },
  {
      id: '2',
      icon: this.calendarIcon,
      header: 'SmartSchedule - Calendar',
      content: 'Calendar will help you keep track of all daily activities such as class hours, meetings, and school events, and also plan for your future schedules.'
  },
  {
      id: '3',
      icon: this.riseTicketIcon,
      header: 'SmartHelp - Raise a Ticket',
      content:'Raise a ticket to the respective department for any issues, suggestions, or when you need the support from the school departments, staff and teachers.'
  },
  {
      id: '4',
      icon: this.emailIcon,
      header: 'SmartConnect - Email',
      content: 'Communicate, share important and formal information with the Smartlearn users easily with Email. You can track it more simple with email thread.'
  },
  {
      id: '5',
      icon: this.eNoticeIcon,
      header: 'Homepage - E-Notice',
      content: 'Get notified about all important activities, events, news and updates with e-notice. Simply to share it to groups or people across the schools & campus.'
  }
  ];
  

}
