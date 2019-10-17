import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TopicsResolverService} from './topics/topics-resolver.service.';
import {ProductsResolverService} from './topics/topic-detail/products-resolver.service';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'topic',
    pathMatch: 'full',
  },
  {
    path: 'topic',
    resolve: [TopicsResolverService, ProductsResolverService],
    loadChildren: () => import('./topics/topics.module').then(m => m.TopicsModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
],
  exports: [RouterModule]
})
export class AppRoutingModule {}
