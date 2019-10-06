import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {DropdownDirective} from './shared/dropdown.directive';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthComponent} from './auth/auth.component';
import {LoadingSpinnerComponent} from './shared/loading-spinner/loading-spinner.component';
import {EditorComponent} from './shared/editor/editor.component';
import {QuillModule} from 'ngx-quill';
import {TopicComponent} from './topics/topic.component';
import {TopicDetailComponent} from './topics/topic-detail/topic-detail.component';
import {TopicListComponent} from './topics/topic-list/topic-list.component';
import {TopicItemComponent} from './topics/topic-list/topic-item/topic-item.component';
import {ProductItemComponent} from './topics/topic-detail/product-item/product-item.component';
import {ProductComponent} from './product/product.component';
import {ChapterListComponent} from './product/chapter-list/chapter-list.component';
import {ChapterItemComponent} from './product/chapter-list/chapter-item/chapter-item.component';
import {ChapterDetailComponent} from './product/chapter-detail/chapter-detail.component';
import {StepItemComponent} from './product/chapter-detail/step-item/step-item.component';
import {TopicStartComponent} from './topics/topic-start/topic-start.component';
import {ProdductStartComponent} from './product/prodduct-start/prodduct-start.component';
import {TopicEditComponent} from './topics/topic-edit/topic-edit.component';
import { ProductEditComponent } from './topics/topic-detail/product-edit/product-edit.component';
import { ChapterEditComponent } from './product/chapter-edit/chapter-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    AuthComponent,
    LoadingSpinnerComponent,
    EditorComponent,
    TopicComponent,
    TopicDetailComponent,
    TopicListComponent,
    TopicItemComponent,
    ProductItemComponent,
    ProductComponent,
    ChapterListComponent,
    ChapterItemComponent,
    ChapterDetailComponent,
    StepItemComponent,
    TopicStartComponent,
    ProdductStartComponent,
    TopicEditComponent,
    ProductEditComponent,
    ChapterEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    QuillModule.forRoot({
      modules: {
        syntax: true,
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
          ['blockquote', 'code-block'],
          [{header: 1}, {header: 2}],               // custom button values
          [{list: 'ordered'}, {list: 'bullet'}],
          [{script: 'sub'}, {script: 'super'}],      // superscript/subscript
          [{indent: '-1'}, {indent: '+1'}],          // outdent/indent
          [{direction: 'rtl'}],                         // text direction
          [{size: ['small', false, 'large', 'huge']}],  // custom dropdown
          [{header: [1, 2, 3, 4, 5, 6, false]}],
          [{color: []}, {background: []}],          // dropdown with defaults from theme
          [{font: []}],
          [{align: []}],
          ['clean'],                                         // remove formatting button
          ['link', 'image', 'video']                         // link and image, video
        ]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
