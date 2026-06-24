import { Component, signal, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { StateUi } from '../../../../shared/state-ui/state-ui';
@Component({
  selector: 'app-patient',
  imports: [RouterOutlet, RouterLink, RouterLinkActive,StateUi],
  templateUrl: './patient.html',
  styleUrl: './patient.scss',
})
export class Patient {
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