import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {StallionsComponent} from './stallions.component';
import {StallionDetailComponent} from './stallion-detail/stallion-detail.component';

const stallionsRoutes: Routes = [
    {path: 'stallions', component: StallionsComponent},
    {path: 'stallion/:id', component: StallionDetailComponent}
];


@NgModule({
    imports: [
        RouterModule.forChild(stallionsRoutes)

    ],
    exports: [
        RouterModule
    ]
})
export class StallionsRoutingModule {
}
