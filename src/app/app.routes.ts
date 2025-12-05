import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'fda-enforcement', loadComponent: () => import('./features/fda-enforcement/fda-enforcement.component').then(m => m.FdaEnforcementComponent) },
    { path: '**', redirectTo: '' }
];
