import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {HeaderComponent} from './header/header.component';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {SharedMoudle} from './shared/shared.module';
import { SearchComponent } from './search/search.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    SharedMoudle,
    AppRoutingModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
