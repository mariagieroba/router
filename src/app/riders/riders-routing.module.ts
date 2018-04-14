import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RidersHomeComponent} from './riders-home/riders-home.component';
import {RidersListComponent} from './riders-list/riders-list.component';
import {RiderDetailComponent} from './rider-detail/rider-detail.component';
import {RidersComponent} from './riders.component';

const ridersRoutes: Routes = [
    {
        path: 'riders',
        component: RidersComponent,
        children: [
            {
                path: '',
                component: RidersListComponent,
                children: [
                    {
                        path: ':id',
                        component: RiderDetailComponent
                    },
                    {
                        path: '',
                        component: RidersHomeComponent
                    }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(ridersRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class RidersRoutingModule {
}
