import {Injectable} from '@angular/core';
import {Chapter} from '../../shared/chapter.model';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {
  chaptersChanged = new Subject<Chapter[]>();
  private chapters: Chapter[] = [];

  constructor(private http: HttpClient) { }

  fetchChaptersByProduct(productId: number) {
    const para = {pid: String(productId)};
    this.http.get<Chapter[]>(environment.API + '/chapters_product', {params: para}).
    subscribe(chapters => {
      this.setChapters(chapters);
      console.log(chapters);
    });
  }

  setChapters(chapters: Chapter[]) {
    this.chapters = chapters;
    this.chaptersChanged.next(chapters.slice());
  }

  getChapters() {
    return this.chapters;
  }

  getChapterById(chapterId: number) {
    let res: Chapter = new Chapter(-1, -1, null, 'loading', '');
    this.chapters.forEach(chapter => {
      if (chapterId === chapter.id) {
        res = chapter;
      }
    });
    return res;
  }

  updateChapter(chapter: Chapter) {
    this.http.post(environment.API + '/chapter', chapter).subscribe(response => {
      console.log(response);
    });
  }

  deleteChapter(chapterId: number) {
    this.http.delete(environment.API + '/chapterDel/' + chapterId).subscribe(response => {
      console.log(response);
    });
  }
}
