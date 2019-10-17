import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TopicComponent} from './topic.component';
import {TopicStartComponent} from './topic-start/topic-start.component';
import {TopicEditComponent} from './topic-edit/topic-edit.component';
import {TopicDetailComponent} from './topic-detail/topic-detail.component';
import {ProductEditComponent} from './topic-detail/product-edit/product-edit.component';
import {AuthGuard} from '../auth/auth.guard';
import {TopicsResolverService} from './topics-resolver.service.';
import {ProductsResolverService} from './topic-detail/products-resolver.service';
import {AuthAdminGuard} from '../auth/auth-admin.guard';

const routes: Routes = [
  {
    path: '',
    component: TopicComponent,
    children: [
      {
        path: '',
        component: TopicStartComponent,
        resolve: [TopicsResolverService, ProductsResolverService],
        pathMatch: 'full'
      },
      {
        path: 'new',
        canActivate: [AuthAdminGuard],
        resolve: [TopicsResolverService, ProductsResolverService],
        component: TopicEditComponent
      },
      {
        path: ':topicId',
        component: TopicDetailComponent
      },
      {
        path: ':topicId/edit',
        canActivate: [AuthAdminGuard],
        component: TopicEditComponent
      },
      // {
      //   path: ':topicId/:productId',
      //   component: ProductEditComponent
      // },
      {
        path: ':topicId/new',
        canActivate: [AuthAdminGuard],
        component: ProductEditComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopicsRoutingModule {
}
