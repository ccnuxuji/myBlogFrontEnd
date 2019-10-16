import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ProductComponent} from './product.component';
import {ProdductStartComponent} from './prodduct-start/prodduct-start.component';
import {ChapterEditComponent} from './chapter-edit/chapter-edit.component';
import {ChapterDetailComponent} from './chapter-detail/chapter-detail.component';

const routes: Routes = [
  {path: 'product/:productId', component: ProductComponent, children: [
      {path: '', component: ProdductStartComponent, pathMatch: 'full'},
      {path: 'new', component: ChapterEditComponent, pathMatch: 'full'},
      {path: ':chapterId', component: ChapterDetailComponent},
      {path: ':chapterId/edit', component: ChapterEditComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
