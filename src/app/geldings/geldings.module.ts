import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {GeldingsComponent} from './geldings.component';
import {GeldingDetailComponent} from './gelding-detail/gelding-detail.component';

import {GeldingsService} from './geldings.service';
import {GeldingsRoutingModule} from './geldings-routing.module';

@NgModule({
    declarations: [
        GeldingsComponent,
        GeldingDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        GeldingsRoutingModule
    ],
    providers: [
        GeldingsService
    ]
})
export class GeldingsModule {
}
