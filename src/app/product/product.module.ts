import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {ProductComponent} from './product.component';
import {ChapterListComponent} from './chapter-list/chapter-list.component';
import {ChapterItemComponent} from './chapter-list/chapter-item/chapter-item.component';
import {ChapterDetailComponent} from './chapter-detail/chapter-detail.component';
import {StepItemComponent} from './chapter-detail/step-item/step-item.component';
import {ProductStartComponent} from './product-start/product-start.component';
import {ChapterEditComponent} from './chapter-edit/chapter-edit.component';
import {SharedMoudle} from '../shared/shared.module';
import {ProductRoutingModule} from './product-routing.module';

@NgModule({
  declarations: [
    ProductComponent,
    ChapterListComponent,
    ChapterItemComponent,
    ChapterDetailComponent,
    StepItemComponent,
    ProductStartComponent,
    ChapterEditComponent,
  ],
  imports: [
    SharedMoudle,
    HttpClientModule,
    RouterModule,
    ProductRoutingModule
  ]
})
export class  ProductModule {}

