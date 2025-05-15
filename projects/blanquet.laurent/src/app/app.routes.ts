import { Routes } from '@angular/router';

export const routes: Routes = [
  {
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
},
  {
    path: 'home',
    title : 'CV interactif - Blanquet Laurent',
    loadComponent: () => import('../pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'contact-details',
    title : 'Coordonnées - Blanquet Laurent',
    loadComponent: () => import('../pages/contact-details/contact-details.component').then(m => m.ContactDetailsComponent)
  }
];
