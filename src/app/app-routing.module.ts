import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {RidersComponent} from './riders/riders.component';
import {ManagerComponent} from './manager/manager.component';

const routes: Routes = [
    {
        path: 'riders',
        component: RidersComponent,
        data: {title: 'Riders List'}
    },
    {
        path: 'manager',
        component: ManagerComponent,
        data: {title: 'Manager'}
    },
    {
        path: '',
        redirectTo: 'riders',
        pathMatch: 'full'
    },
    {path: '**', component: PageNotFoundComponent}
];


@NgModule({
    imports: [
        RouterModule.forRoot(
            routes,
            {enableTracing: true})

    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}