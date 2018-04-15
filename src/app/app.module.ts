import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

import {GeldingsModule} from './geldings/geldings.module';
import {MaresModule} from './mares/mares.module';
import {StallionsModule} from './stallions/stallions.module';
import {RidersModule} from './riders/riders.module';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import {ManagerModule} from './manager/manager.module';
import { LoginComponent } from './login/login.component';
import {LoginRoutingModule} from './login/login-routing.module';
import {DialogService} from './dialog.service';

@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent,
        ComposeMessageComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaresModule,
        GeldingsModule,
        StallionsModule,
        RidersModule,
        FormsModule,
        ManagerModule,
        LoginRoutingModule,
        AppRoutingModule
    ],
    providers: [DialogService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
