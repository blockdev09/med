import { Component, inject, signal } from '@angular/core';
import { ILogin } from '../../../../interfaces/login/login';
import { email, form, required, FormField } from '@angular/forms/signals';
import { LandingHeader } from '../../../../layout/header/landing-header/landing-header';
import { LandingMain } from '../../../../layout/landing/landing-main/landing-main';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../../services/auth-service';
import { UserService } from '../../../../services/user-service';
import { RoleService } from '../../../../services/role-service';

@Component({
  selector: 'app-login',
  imports: [LandingHeader, FormField, LandingMain, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  readonly authService = inject(AuthService);
  readonly userService = inject(UserService);
  readonly roleService = inject(RoleService);
  readonly router = inject(Router);

  loginModel = signal<ILogin>({
    email: '',
    password: '',
  });

  loginForm = form(this.loginModel, (path) => {
    required(path.email, { message: 'Email is required!' });
    email(path.email, { message: 'Enter valid email!' });
    required(path.password, { message: 'Password is required!' });
  });

  private navigateByRole(role: string) {
    // if (role === 'PATIENT') this.router.navigate(['/patient']);
    // else if (role === 'COORDINATOR') this.router.navigate(['/compounder']);
    // else if (role === 'CLINICIAN') this.router.navigate(['/clinician']);
    // else this.router.navigate(['/login']);
  }

  onSubmit(e: Event) {
    e.preventDefault();
    const loginData = this.loginModel();

    this.authService.login(loginData).subscribe({
      next: (res: any) => {
        localStorage.setItem('access_token', res.accessToken);
        localStorage.setItem('refresh_token', res.refreshToken);

        // this.userService.getUser().subscribe({
        //   next: (user: any) => {
        //     localStorage.setItem('role', user.role);
        //     localStorage.setItem('user', JSON.stringify(user));
        //     this.navigateByRole(user.role);
        //   },
        //   error: (err: any) => {
        //     console.log(err);
        //   },
        // });
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}