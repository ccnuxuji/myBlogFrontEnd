import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AuthComponent} from './auth/auth.component';
import {EditorComponent} from './shared/editor/editor.component';
import {TopicComponent} from './topics/topic.component';
import {TopicDetailComponent} from './topics/topic-detail/topic-detail.component';
import {ProductComponent} from './product/product.component';
import {ChapterDetailComponent} from './product/chapter-detail/chapter-detail.component';
import {TopicStartComponent} from './topics/topic-start/topic-start.component';
import {ProdductStartComponent} from './product/prodduct-start/prodduct-start.component';
import {TopicEditComponent} from './topics/topic-edit/topic-edit.component';
import {ProductEditComponent} from './topics/topic-detail/product-edit/product-edit.component';
import {ChapterEditComponent} from './product/chapter-edit/chapter-edit.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'topic', pathMatch: 'full' },
  {path: 'auth', component: AuthComponent},
  {path: 'editor', component: EditorComponent},
  {path: 'topic', component: TopicComponent, children: [
      {path: '', component: TopicStartComponent, pathMatch: 'full'},
      {path: 'new', component: TopicEditComponent},
      {path: ':topicId', component: TopicDetailComponent},
      {path: ':topicId/edit', component: TopicEditComponent},
      {path: ':topicId/:productId', component: ProductEditComponent},
      {path: ':topicId/new', component: ProductEditComponent},
    ]},
  {path: 'product/:productId', component: ProductComponent, children: [
      {path: '', component: ProdductStartComponent, pathMatch: 'full'},
      {path: 'new', component: ChapterEditComponent, pathMatch: 'full'},
      {path: ':chapterId', component: ChapterDetailComponent},
      {path: ':chapterId/edit', component: ChapterEditComponent},
    ]},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
