import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ManagerComponent} from './manager.component';
import {ManagerDashboardComponent} from './manager-dashboard/manager-dashboard.component';
import {ManageRidersComponent} from './manage-riders/manage-riders.component';
import {ManageHorsesComponent} from './manage-horses/manage-horses.component';
import {ManagerRoutingModule} from './manager-routing.module';

@NgModule({
    imports: [
        CommonModule,
        ManagerRoutingModule

    ],
    declarations: [
        ManagerComponent,
        ManagerDashboardComponent,
        ManageHorsesComponent,
        ManageRidersComponent
    ]
})
export class ManagerModule {}
