import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';
import { patientGuard } from './guards/patient-guard';
import { compounderGuard } from './guards/coordinator-guard';
import { clinicianGuard } from './guards/clinician-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () =>
      import('../app/features/auth/auth.routes').then((route) => route.authRoutes),
  },
  {
    path: 'patient',
    // canActivate: [authGuard, patientGuard],
    loadChildren: () =>
      import('../app/features/patient/patient.routes').then((route) => route.patientRoutes),
  },
  {
    path: 'compounder',
    // canActivate: [authGuard, compounderGuard],
    loadChildren: () =>
      import('../app/features/compounder/compounder.routes').then(
        (route) => route.compounderRoutes,
      ),
  },
  {
    path: 'clinician',
    // canActivate: [authGuard, clinicianGuard],
    loadChildren: () =>
      import('../app/features/clinician/clinician.routes').then((route) => route.clinicianRoutes),
  },
];