import {Component, OnInit} from '@angular/core';
import {SearchResponseData, SearchService} from './search.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

export interface SearchResult {
  id: number;
  name: string;
  description: string;
  content: string;
  chapter: {
    id: number;
    name: string;
    product: {
      id: number;
      name: string;
      thumbnail: string
      topic: {
        id: number;
        name: string
      };
    };
  };
}


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  keyword: string;
  searchResponseData: SearchResponseData;
  navigatepageNums: number[];
  searchResult: SearchResult[];
  currPage: number;

  constructor(private route: ActivatedRoute,
              private searchService: SearchService,
              private router: Router,
              private domSanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(queryPara => {
        this.keyword = queryPara.keyword;
        if (this.keyword === null) {
          this.keyword = '';
        }
        this.getSearchResult(this.keyword, 0);
      }
    );
  }

  getSearchResult(keyword: string, start: number) {
    this.searchService.fetchSearchResult(keyword, start).subscribe(res => {
      this.searchResponseData = this.searchService.getSearchResponseData();
      this.searchResult = this.searchResponseData.content;
      this.navigatepageNums = this.searchResponseData.navigatepageNums;
      this.currPage = this.searchResponseData.number + 1;
      console.log(this.searchResult);
    });
  }

  jump(page) {
    if ('first' === page && !this.searchResponseData.first) {
      this.getSearchResult(this.keyword, 0);
    } else if ('pre' === page && this.searchResponseData.hasPrevious) {
      this.getSearchResult(this.keyword, this.searchResponseData.number - 1);
    } else if ('next' === page && this.searchResponseData.hasNext) {
      this.getSearchResult(this.keyword, this.searchResponseData.number + 1);
    } else if ('last' === page && !this.searchResponseData.last) {
      this.getSearchResult(this.keyword, this.searchResponseData.totalPages - 1);
    }
  }

  jumpByNumber(num: number) {
    this.getSearchResult(this.keyword, num);
  }

  jumpToStep(i: SearchResult) {
    this.router.navigate(['/product/' + i.chapter.product.id + '/' + i.chapter.id]);
  }


}
