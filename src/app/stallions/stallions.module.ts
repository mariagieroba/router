import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {StallionsComponent} from './stallions.component';
import {StallionDetailComponent} from './stallion-detail/stallion-detail.component';

import {StallionsService} from './stallions.service';
import {StallionsRoutingModule} from './stallions-routing.module';

@NgModule({
    declarations: [
        StallionsComponent,
        StallionDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        StallionsRoutingModule
    ],
    providers: [
         StallionsService
    ]
})
export class StallionsModule {
}
