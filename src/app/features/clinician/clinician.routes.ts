import { Routes } from '@angular/router';
import { Clinician } from './pages/clinician/clinician';

export const clinicianRoutes: Routes = [
  {
    path: '',
    component: Clinician,
    children: [
      {
        path: '',
        redirectTo: 'queue',
        pathMatch: 'full',
      },
      {
        path: 'queue',
        loadComponent: () =>
          import('./pages/queue/queue').then((c) => c.Queue),
      },
      {
        path: 'visit/:id',
        loadComponent: () =>
          import('./pages/visit/visit').then((c) => c.Visit),
      },
    ],
  },
];