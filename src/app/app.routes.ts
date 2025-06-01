import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/index-page/index-page').then(m => m.IndexPage)
    },

    {
        path: '',
        loadComponent: () => import('./feature/layout/layout').then(m => m.Layout),
        children: [
            {
                path: 'about',
                title: 'About Us - Satendra Rajput',
                loadComponent: () => import('./pages/home/about-us/about-us').then(m => m.AboutUs)
            },
            {
                path: 'experience',
                title: 'Experience - Satendra Rajput',
                loadComponent: () => import('./pages/home/experience/experience').then(m => m.Experience)
            },
            {
                path: 'contact',
                title: 'Contact - Satendra Rajput',
                loadComponent: () => import('./pages/home/contact/contact').then(m => m.Contact)
            },
            {
                path: 'projects',
                title: 'Projects - Satendra Rajput',
                loadComponent: () => import('./pages/home/project/project').then(m => m.Project)
            }
            ,
            {
                path: 'projects/:id',
                title: 'Project Details - Satendra Rajput',
                loadComponent: () => import('./pages/home/project-details/project-details')
                    .then(m => m.ProjectDetails),
                data: {
                    renderMode: 'pre-render',
                    getPrerenderParams: () => [
                        { id: '1' },
                        { id: '2' },
                        { id: '3' }
                    ]
                },
            }
        ]
    },


];
