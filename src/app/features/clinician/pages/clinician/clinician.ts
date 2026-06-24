import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-clinician',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './clinician.html',
  styleUrl: './clinician.scss',
})
export class Clinician {
  readonly router = inject(Router);

  user = JSON.parse(localStorage.getItem('user') || '{}');
  isSidebarOpen = signal(true);

  toggleSidebar() {
    this.isSidebarOpen.update((v) => !v);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}