import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './AuthService/auth.service';
import { environment } from '../../../environments/environment';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  http = inject(HttpClient);
  constructor(private router: Router) {

  }
  authService = inject(AuthService);
  getProfile() {
    const token = this.authService.getToken();

    if (!token) {
      this.router.navigate(['/login']);
      // Return an empty observable instead of undefined
      return of(null as any); // or use EMPTY from rxjs if you prefer
    }

    const headers = new HttpHeaders({
      'Authorization': `${token}`
    });

    const url = `${environment.APIKEY}/Staff/GetUserDetailForHeader`;

    return this.http.get(url, { headers });
  }
}

