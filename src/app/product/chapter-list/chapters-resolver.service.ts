import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Params, Resolve, RouterStateSnapshot} from '@angular/router';

import {Chapter} from '../../shared/chapter.model';
import {Observable} from 'rxjs';
import {ChapterService} from './chapter.service';

@Injectable({
  providedIn: 'root'
})
export class ChaptersResolverService implements Resolve<Chapter[]> {

  constructor(private chapterService: ChapterService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Chapter[]> | Promise<Chapter[]> | Chapter[] {
    const id =  state.url.split('/')[2];
    console.log('进来了');
    return this.chapterService.fetchChaptersByProduct(+id);
  }
}
