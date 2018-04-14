import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {RidersService} from './riders.service';

import {RidersComponent} from './riders.component';
import {RidersListComponent} from './riders-list/riders-list.component';
import {RidersHomeComponent} from './riders-home/riders-home.component';
import {RiderDetailComponent} from './rider-detail/rider-detail.component';

import {RidersRoutingModule} from './riders-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RidersRoutingModule
    ],
    declarations: [
        RidersComponent,
        RidersListComponent,
        RiderDetailComponent,
        RidersHomeComponent
    ],
    providers: [
        RidersService
    ]
})
export class RidersModule {
}

