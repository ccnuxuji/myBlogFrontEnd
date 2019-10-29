import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TopicsResolverService} from './topics/topics-resolver.service.';
import {ProductsResolverService} from './topics/topic-detail/products-resolver.service';
import {SearchComponent} from './search/search.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {AuthGuard} from './auth/auth.guard';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'topic',
    pathMatch: 'full',
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'welcome',
    canActivate: [AuthGuard],
    component: WelcomeComponent
  },
  {
    path: 'topic',
    resolve: [TopicsResolverService, ProductsResolverService],
    loadChildren: () => import('./topics/topics.module').then(m => m.TopicsModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'product/:productId',
    loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
],
  exports: [RouterModule]
})
export class AppRoutingModule {}
