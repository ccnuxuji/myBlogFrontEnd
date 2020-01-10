import {Injectable, Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'highlight'
})
@Injectable()
export class HighlightPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {
  }


  transform(value: string, keyword: string): any {
    const Reg = new RegExp(keyword, 'i');
    if (value) {
      const res = value.replace(Reg, `<span style="color: #ff2424;">${keyword}</span>`);
      // console.log(res)
      return this.sanitizer.bypassSecurityTrustHtml(res);
    }
  }

}
