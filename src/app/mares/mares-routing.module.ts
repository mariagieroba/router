import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {MaresComponent} from './mares.component';
import {MareDetailComponent} from './mare-detail/mare-detail.component';

const maresRoutes: Routes = [
    {path: 'mares', component: MaresComponent},
    {path: 'mare/:id', component: MareDetailComponent}
];


@NgModule({
    imports: [
        RouterModule.forChild(maresRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class MaresRoutingModule {
}
