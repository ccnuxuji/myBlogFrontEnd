import {NgModule} from '@angular/core';

import {AuthComponent} from './auth.component';
import {SharedMoudle} from '../shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import {AuthRoutingModule} from './auth-routing.module';

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    AuthRoutingModule,
    SharedMoudle,
    HttpClientModule
  ]
})
export class AuthModule {}
