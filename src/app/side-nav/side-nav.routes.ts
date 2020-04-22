import { RouterModule, Routes } from '@angular/router';
import { SideNavComponent } from './side-nav.component';

// tslint:disable-next-line: variable-name
const side_nav_routes: Routes = [
    { path: '', component: SideNavComponent},
    { path: 'index', component: SideNavComponent},
    { path: 'ingreso',
      loadChildren: () => import('../ingreso/ingreso.module').then(m => m.IngresoModule) },

];

export const SIDE_NAV_ROUTES = RouterModule.forChild( side_nav_routes );
