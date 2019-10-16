import {NgModule} from '@angular/core';
import {AuthComponent} from './auth.component';
import {SharedMoudle} from '../shared/shared.module';

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    SharedMoudle
  ],
  exports: [
    AuthComponent
  ]
})
export class AuthModule {}
