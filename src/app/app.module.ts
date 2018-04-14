import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { RidersComponent } from './riders/riders.component';
import { ManagerComponent } from './manager/manager.component';
import {GeldingsModule} from './geldings/geldings.module';
import {MaresModule} from './mares/mares.module';
import {StallionsModule} from './stallions/stallions.module';

@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent,
        RidersComponent,
        ManagerComponent
    ],
    imports: [
        BrowserModule,
        MaresModule,
         GeldingsModule,
         StallionsModule,
        AppRoutingModule

        // StallionsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
