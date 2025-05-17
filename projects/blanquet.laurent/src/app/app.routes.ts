import { Routes } from '@angular/router';

export const routes: Routes = [
  {
  path: '',
  redirectTo: '/presentation',
  pathMatch: 'full'
},
  {
    path: 'presentation',
    title : 'Présentation - Blanquet Laurent',
    loadComponent: () => import('../pages/presentation/presentation.component').then(m => m.PresentationComponent)
  },
  {
    path: 'experiences',
    title : 'Expériences - Blanquet Laurent',
    loadComponent: () => import('../pages/experiences/experiences.component').then(m => m.ExperiencesComponent)
  },
  {
    path: 'being',
    title : 'Savoirs être - Blanquet Laurent',
    loadComponent: () => import('../pages/being/being.component').then(m => m.BeingComponent)
  },
  {
    path: 'skills',
    title : 'Savoirs faire - Blanquet Laurent',
    loadComponent: () => import('../pages/skills/skills.component').then(m => m.SkillsComponent)
  },
];
