import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {EditorComponent} from './editor/editor.component';
import {LoadingSpinnerComponent} from './loading-spinner/loading-spinner.component';
import {DropdownDirective} from './dropdown.directive';
import {QuillModule} from 'ngx-quill';
import {AlertComponent} from './alert/alert.component';
import {PlaceholderDirective} from './placeholder/placeholder.directive';

@NgModule({
  declarations: [
    EditorComponent,
    LoadingSpinnerComponent,
    DropdownDirective,
    AlertComponent,
    PlaceholderDirective,
  ],
  exports: [
    EditorComponent,
    LoadingSpinnerComponent,
    DropdownDirective,
    AlertComponent,
    PlaceholderDirective,
    QuillModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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
  ]
})
export class SharedMoudle { }
