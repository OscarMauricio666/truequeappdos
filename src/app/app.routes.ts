import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '',
      loadChildren: () => import('./side-nav/side-nav.module'). then(m => m.SideNavModule)},
    { path: '**',
      loadChildren: () => import('./side-nav/side-nav.module').then(m => m.SideNavModule) },
];

export const ROUTES = RouterModule.forRoot( routes, {useHash: true} );
