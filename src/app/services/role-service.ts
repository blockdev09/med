import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  getRole(): string {
    return localStorage.getItem('role') || '';
  }

  setRole(role: string) {
    localStorage.setItem('role', role);
  }

  clearRole() {
    localStorage.removeItem('role');
  }
}
