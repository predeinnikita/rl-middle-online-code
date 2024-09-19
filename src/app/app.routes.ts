import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'main',
    loadComponent: () =>
      import('./pages/main/main.component').then((m) => m.MainComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'user',
    loadComponent: () =>
      import('./pages/user-settings/user-settings.component').then(
        (m) => m.UserSettingsComponent
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
