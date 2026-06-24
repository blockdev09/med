import { Routes } from '@angular/router';
import { Patient } from './pages/patient/patient';

export const patientRoutes: Routes = [
  {
    path: '',
    component: Patient,
    children: [
      {
        path: '',
        redirectTo: 'appointments',
        pathMatch: 'full',
      },
      {
        path: 'appointments',
        loadComponent: () =>
          import('./pages/appointment/appointment').then((c) => c.Appointments),
      },
      {
        path: 'intake/:id',
        loadComponent: () =>
          import('./pages/intake/intake').then((c) => c.Intake),
      },
      {
        path: 'queue',
        loadComponent: () =>
          import('./pages/queue/queue').then((c) => c.Queue),
      },
      {
        path: 'summary/:id',
        loadComponent: () =>
          import('./pages/summary/summary').then((c) => c.Summary),
      },
    ],
  },
];