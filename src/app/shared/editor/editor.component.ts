import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import Quill from 'quill';

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
  imgUrls = [];

  constructor(private http: HttpClient
             ) { }

  ngOnInit() {
  }

  editorCreated(quill) {
    const toolbar = quill.getModule('toolbar');
    toolbar.addHandler('image', this.imageHandler.bind(this));
    this.editor = quill;
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
      const header = new Headers();
      header.append('Accept', 'application/json');
      const options = { headers: header };
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
    console.log(input);
    if (!!input.delta.ops[1].delete) {
      const position = input.delta.ops[0].retain;
      const Delta = Quill.import('delta');
      const death = new Delta().delete(position).retain(1).delete(100);
      const inputDelta = input.oldDelta.compose(death);
      const deleteImg = this.quillGetHTML(inputDelta);
      console.log(inputDelta);
      console.log(deleteImg);
      if (!!this.quillGetHTML(inputDelta)) {
        const imgSrc = deleteImg.getAttribute('src');
        const imgName = imgSrc.split('/')[5];
        console.log(imgName);
        const para = {imgname: imgName};
        this.http.delete('http://localhost:8080/techroad/imgdelete', {params: para})
          .subscribe(res => {
            console.log(res);
          });
      }
    }
    this.editorContentChanged.emit(this.contentObject);
  }

  quillGetHTML(inputDelta) {
    const tempCont = document.createElement('div');
    (new Quill(tempCont)).setContents(inputDelta);
    return tempCont.getElementsByTagName('img')[0];
  }

}
