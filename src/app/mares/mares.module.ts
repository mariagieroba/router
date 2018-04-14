import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {MaresComponent} from './mares.component';
import {MareDetailComponent} from './mare-detail/mare-detail.component';

import {MaresService} from './mares.service';
import {MaresRoutingModule} from './mares-routing.module';

@NgModule({
    declarations: [
        MaresComponent,
        MareDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MaresRoutingModule
    ],
    providers: [
         MaresService
    ]
})
export class MaresModule {
}
