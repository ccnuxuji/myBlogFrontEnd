import {Injectable} from '@angular/core';
import {Step} from '../shared/step.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {tap} from 'rxjs/operators';
import {SearchResult} from './search.component';


export interface SearchResponseData {
  navigatePages: number;
  totalPages: number;
  number: number;
  totalElements: number;
  size: number;
  content: SearchResult[];
  first: boolean;
  last: boolean;
  navigatepageNums: number[];
  hasContent: boolean;
  hasNext: boolean;
  hasPrevious: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchResponseData: SearchResponseData;

  constructor(private http: HttpClient) {
  }

  fetchSearchResult(keyword: string, start: number) {
    const para = {
      keyword,
      start: String(start)
    };
    return this.http.get<SearchResponseData>(environment.API + '/search', {params: para})
      .pipe(
        tap(res => {
          this.setSearchResponseData(res);
        })
      );
  }

  setSearchResponseData(responseData: SearchResponseData) {
    this.searchResponseData = responseData;
  }

  getSearchResponseData() {
    return this.searchResponseData;
  }
}
