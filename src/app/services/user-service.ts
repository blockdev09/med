import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user = signal<any>({});
  role = signal<string>('');
  readonly http = inject(HttpClient);
  setRole(data: string) {
    this.role.set(data);
  }
  // getUser() {
  //   const token = localStorage.getItem('access_token');
  //   return this.http.get('https://xhkrpfff-7000.inc1.devtunnels.ms/auth/me',  {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     }
  //   });
  // }
}
