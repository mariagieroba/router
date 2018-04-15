import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ManagerComponent} from './manager/manager.component';
import {ComposeMessageComponent} from './compose-message/compose-message.component';
import {CanDeactivateGuard} from './can-deactivate-guard.service';
import {AuthGuard} from './auth-guard.service';

const routes: Routes = [
    {
        path: 'compose',
        component: ComposeMessageComponent,
        outlet: 'popup'
    },
    {
        path: 'manager',
        loadChildren: 'app/manager/manager.module#ManagerModule',
        canLoad: [AuthGuard]
    },
    {path: '', redirectTo: '/riders', pathMatch: 'full'},
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
    ],
    providers: [
        CanDeactivateGuard,
        AuthGuard
    ]
})
export class AppRoutingModule {
}
