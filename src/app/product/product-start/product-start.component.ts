import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

import {ChapterService} from '../chapter-list/chapter.service';
import {Chapter} from '../../shared/chapter.model';

@Component({
  selector: 'app-product-start',
  templateUrl: './product-start.component.html',
  styleUrls: ['./product-start.component.css']
})
export class ProductStartComponent implements OnInit {
  productId: number;
  isEmpty = false;
  chapters: Chapter[];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private chapterService: ChapterService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.productId = +params.productId;
      this.chapters =  this.chapterService.getChapters();
      if (this.chapters.length !== 0) {
        this.isEmpty = false;
        this.router.navigate(['product/', this.productId, this.chapters[0].id]);
      } else {
        this.isEmpty = true;
      }
    });
  }

}
