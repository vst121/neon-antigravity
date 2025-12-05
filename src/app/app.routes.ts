import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { authGuard } from './core/auth/auth.guard';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'fda-enforcement',
        loadComponent: () => import('./features/fda-enforcement/fda-enforcement.component').then(m => m.FdaEnforcementComponent),
        canActivate: [authGuard]
    },
    { path: 'about', loadComponent: () => import('./features/about/about.component').then(m => m.AboutComponent) },
    { path: '**', redirectTo: '' }
];
