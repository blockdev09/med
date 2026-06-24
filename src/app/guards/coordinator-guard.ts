import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const compounderGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const role = localStorage.getItem('role');
  if (role === 'COORDINATOR') return true;
  router.navigate(['/login']);
  return false;
};