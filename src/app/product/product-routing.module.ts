import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ProductComponent} from './product.component';
import {ProductStartComponent} from './product-start/product-start.component';
import {ChapterEditComponent} from './chapter-edit/chapter-edit.component';
import {ChapterDetailComponent} from './chapter-detail/chapter-detail.component';
import {ChaptersResolverService} from './chapter-list/chapters-resolver.service';
import {AuthAdminGuard} from '../auth/auth-admin.guard';
import {StepsResolverService} from './chapter-detail/steps-resolver.service';
import {StepEditComponent} from './chapter-detail/step-edit/step-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
    children: [
      {path: '',
        resolve: [ChaptersResolverService],
        component: ProductStartComponent,
        pathMatch: 'full'
      },
      {
        path: 'new',
        canActivate: [AuthAdminGuard],
        component: ChapterEditComponent,
        resolve: [ChaptersResolverService],
        pathMatch: 'full'
      },
      {
        path: ':chapterId',
        resolve: [ChaptersResolverService, StepsResolverService],
        component: ChapterDetailComponent
      },
      {
        path: ':chapterId/edit',
        canActivate: [AuthAdminGuard],
        component: ChapterEditComponent,
        resolve: [ChaptersResolverService],
      },
      {
        path: ':chapterId/:stepId',
        resolve: [ChaptersResolverService, StepsResolverService],
        component: StepEditComponent,
      },
      {
        path: ':chapterId/new',
        resolve: [ChaptersResolverService, StepsResolverService],
        component: StepEditComponent,
      },
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
