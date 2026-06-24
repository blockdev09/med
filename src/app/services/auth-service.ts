import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IRegister } from '../interfaces/register/register';
import { environment } from '../shared/environment';
import { ILogin } from '../interfaces/login/login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly http = inject(HttpClient);
  register(user: IRegister) {
    return this.http.post('https://xhkrpfff-7000.inc1.devtunnels.ms/auth/register', user);
  }
  login(data: ILogin) {
    return this.http.post("https://xhkrpfff-7000.inc1.devtunnels.ms/auth/login", data);
  }
}
