import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {TopicComponent} from './topic.component';
import {TopicDetailComponent} from './topic-detail/topic-detail.component';
import {TopicListComponent} from './topic-list/topic-list.component';
import {TopicItemComponent} from './topic-list/topic-item/topic-item.component';
import {ProductItemComponent} from './topic-detail/product-item/product-item.component';
import {TopicStartComponent} from './topic-start/topic-start.component';
import {TopicEditComponent} from './topic-edit/topic-edit.component';
import {ProductEditComponent} from './topic-detail/product-edit/product-edit.component';
import {SharedMoudle} from '../shared/shared.module';
import {TopicsRoutingModule} from './topics-routing.module';

@NgModule({
  declarations: [
    TopicComponent,
    TopicDetailComponent,
    TopicListComponent,
    TopicItemComponent,
    TopicStartComponent,
    TopicEditComponent,
    ProductItemComponent,
    ProductEditComponent,
  ],
  imports: [
    SharedMoudle,
    HttpClientModule,
    RouterModule,
    TopicsRoutingModule
  ],

})
export class TopicsModule { }
