import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {ProductComponent} from './product.component';
import {ChapterListComponent} from './chapter-list/chapter-list.component';
import {ChapterItemComponent} from './chapter-list/chapter-item/chapter-item.component';
import {ChapterDetailComponent} from './chapter-detail/chapter-detail.component';
import {StepItemComponent} from './chapter-detail/step-item/step-item.component';
import {ProdductStartComponent} from './prodduct-start/prodduct-start.component';
import {ChapterEditComponent} from './chapter-edit/chapter-edit.component';
import {SharedMoudle} from '../shared/shared.module';
import {HttpClient} from 'selenium-webdriver/http';
import {ProductRoutingModule} from './product-routing.module';

@NgModule({
  declarations: [
    ProductComponent,
    ChapterListComponent,
    ChapterItemComponent,
    ChapterDetailComponent,
    StepItemComponent,
    ProdductStartComponent,
    ChapterEditComponent,
  ],
  imports: [
    SharedMoudle,
    HttpClient,
    RouterModule,
    ProductRoutingModule
  ]
})
export class  ProductModule {}

