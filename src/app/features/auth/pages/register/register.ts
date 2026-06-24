import { Component, inject, signal } from '@angular/core';
import { LandingHeader } from '../../../../layout/header/landing-header/landing-header';
import { LandingMain } from '../../../../layout/landing/landing-main/landing-main';
import { IRegister } from '../../../../interfaces/register/register';
import { email, form, required, FormField } from '@angular/forms/signals';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../../services/auth-service';

@Component({
  selector: 'app-register',
  imports: [LandingHeader, LandingMain, FormField, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  readonly authService = inject(AuthService);
  readonly router = inject(Router);

  registerModel = signal<IRegister>({
    email: '',
    password: '',
    name: '',
  });
  registerForm = form(this.registerModel, (path) => {
    required(path.email, {
      message: 'Email is required!',
    });
    email(path.email, {
      message: 'Enter valid email!',
    });
    required(path.password, {
      message: 'Password is required!',
    });
    required(path.name, {
      message: 'Name is required!',
    });
  });
  onSubmit(e: Event) {
    e.preventDefault();
    const registerData = this.registerModel();
    // this.authService.register(registerData).subscribe({
    //   next: (res: any) => {
        
    //     alert('User Registered Successfully!');
    //     this.router.navigate(['/login']);
    //   },
    //   error: (err: any) => {
    //     console.log(err);
    //   },
    // });
  }
}
