import { Routes } from '@angular/router';
import { Compounder } from './pages/compounder/compounder';

export const compounderRoutes: Routes = [
  {
    path: '',
    component: Compounder,
    children: [
      {
        path: '',
        redirectTo: 'appointments',
        pathMatch: 'full',
      },
      {
        path: 'appointments',
        loadComponent: () =>
          import('./pages/appointments/appointments').then((c) => c.Appointments),
      },
      {
        path: 'queue',
        loadComponent: () =>
          import('./pages/queue/queue').then((c) => c.Queue),
      },
    ],
  },
];