import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface UploadResponseData {
  contentType: string;
  fileName: string;
  url: string;
  type: string;
  msg: string;
}

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  @Output()  editorContentChanged: EventEmitter<any> = new EventEmitter();

  @Input() contentObject: string;
  public editor;

  constructor(private http: HttpClient
             ) { }

  ngOnInit() {
  }

  editorCreated(quill) {
    const toolbar = quill.getModule('toolbar');
    toolbar.addHandler('image', this.imageHandler.bind(this));
    this.editor = quill;
    console.log('success');
  }

  imageHandler() {
    const Imageinput = document.createElement('input');
    Imageinput.setAttribute('type', 'file');
    Imageinput.setAttribute('accept', 'image/png, image/gif, image/jpeg, image/bmp, image/x-icon');
    Imageinput.classList.add('ql-image');
    Imageinput.addEventListener('change', () => {
      const file = Imageinput.files[0];
      const data: FormData = new FormData();
      data.append('file', file, file.name);
      // const header = new Headers();
      // header.append('Accept', 'application/json');
      // const options = { headers: header };
      if (Imageinput.files != null && Imageinput.files[0] != null) {
        this.http.post<UploadResponseData>('http://localhost:8080/techroad/upload', data)
          .subscribe(res => {
            const range = this.editor.getSelection(true);
            const index = range.index + range.length;
            this.editor.insertEmbed(range.index, 'image', 'http://' + res.url);
          });
      }
    });
    Imageinput.click();
  }

  contentChanged(input) {
    this.editorContentChanged.emit(this.contentObject);
    // console.log(this.contentObject);
  }

}
