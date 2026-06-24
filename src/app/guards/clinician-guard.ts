import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const clinicianGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const role = localStorage.getItem('role');
  if (role === 'CLINICIAN') return true;
  router.navigate(['/login']);
  return false;
};