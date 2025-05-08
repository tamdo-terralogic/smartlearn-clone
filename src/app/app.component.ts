import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageService } from 'primeng/api';
import { PrimeNG } from 'primeng/config';
import {  ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-root',
  // standalone: true,
  imports: [RouterOutlet,ToastModule],
  providers:[MessageService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'smartlearn-clone';

  constructor(private primeng: PrimeNG, private messageService: MessageService  ) {}

  ngOnInit() {
      this.primeng.ripple.set(true);
  }
}
