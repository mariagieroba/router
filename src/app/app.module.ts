import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ManagerComponent} from './manager/manager.component';
import {GeldingsModule} from './geldings/geldings.module';
import {MaresModule} from './mares/mares.module';
import {StallionsModule} from './stallions/stallions.module';
import {RidersModule} from './riders/riders.module';
import { ComposeMessageComponent } from './compose-message/compose-message.component';


@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent,
        ManagerComponent,
        ComposeMessageComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaresModule,
        GeldingsModule,
        StallionsModule,
        RidersModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
