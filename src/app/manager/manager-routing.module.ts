import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ManagerComponent} from './manager.component';
import {ManageRidersComponent} from './manage-riders/manage-riders.component';
import {ManageHorsesComponent} from './manage-horses/manage-horses.component';
import {ManagerDashboardComponent} from './manager-dashboard/manager-dashboard.component';
import {AuthGuard} from '../auth-guard.service';

const managerRoutes: Routes = [
    {
        path: '',
        component: ManagerComponent,
        canActivate: [AuthGuard],
        children: [

            {
                path: '',
                canActivateChild: [AuthGuard],
                children: [
                    {path: 'riders', component: ManageRidersComponent},
                    {path: 'horses', component: ManageHorsesComponent},
                    {path: '', component: ManagerDashboardComponent}
                ]
            }

        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(managerRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ManagerRoutingModule {
}