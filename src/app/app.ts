import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './services/user-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App  {
  protected readonly title = signal('medico');
  readonly userService = inject(UserService);
  // ngOnInit(): void {
  //   this.userService.getUser().subscribe({
  //     next: (res: any) => {
  //       // console.log(res);
  //       this.userService.setRole(res['role']);
  //       console.log(this.userService.role());
  //     },
  //     error: (err: any) => {
  //       console.log(err);
  //     },
  //   });
  //   console.log(Date.now());
  // }
}
