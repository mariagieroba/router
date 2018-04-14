import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {GeldingsComponent} from './geldings.component';
import {GeldingDetailComponent} from './gelding-detail/gelding-detail.component';

const geldingsRoutes: Routes = [
    {path: 'geldings', component: GeldingsComponent},
    {path: 'gelding/:id', component: GeldingDetailComponent}
];


@NgModule({
    imports: [
        RouterModule.forChild(geldingsRoutes)

    ],
    exports: [
        RouterModule
    ]
})
export class GeldingsRoutingModule {
}
