import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SIDE_NAV_ROUTES } from './side-nav.routes';

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        SIDE_NAV_ROUTES
     ],
    exports: [],
    providers: [],
})
export class SideNavModule { }
