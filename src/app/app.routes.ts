import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/index-page/index-page').then(m => m.IndexPage)
    },
    
];
