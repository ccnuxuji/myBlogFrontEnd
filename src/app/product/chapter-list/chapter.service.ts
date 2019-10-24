import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {tap} from 'rxjs/operators';

import {Chapter} from '../../shared/chapter.model';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {
  chaptersChanged = new Subject<Chapter[]>();
  private chapters: Chapter[] = [];

  constructor(private http: HttpClient) { }

  addChapter(chapter: Chapter) {
    return this.http.post(
      environment.API + '/chapters',
      chapter
    );
  }

  deleteChapter(chapterId: number) {
    return this.http.delete(
      environment.API + '/chapterDel/' + String(chapterId)
    );
  }

  updateChapter(chapter: Chapter) {
    return this.http.put(
      environment.API + '/chapters',
      chapter
    );
  }

  getChapterById(chapterId: number) {
    return this.http.get<Chapter>(
      environment.API + '/chapters/' + String(chapterId)
    );
  }

  fetchChaptersByProduct(productId: number) {
    const para = {pid: String(productId)};
    return this.http.get<Chapter[]>(
      environment.API + '/chapters_product',
      {params: para})
      .pipe(
        tap(chapters => {
          this.setChapters(chapters);
        })
      );
  }

  setChapters(chapters: Chapter[]) {
    this.chapters = chapters;
    this.chaptersChanged.next(chapters.slice());
  }

  getChapters() {
    return this.chapters.slice();
  }

}
