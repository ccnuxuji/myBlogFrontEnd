import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ChapterService} from '../chapter-list/chapter.service';
import {Subscription} from 'rxjs';
import {Chapter} from '../../shared/chapter.model';

@Component({
  selector: 'app-prodduct-start',
  templateUrl: './prodduct-start.component.html',
  styleUrls: ['./prodduct-start.component.css']
})
export class ProdductStartComponent implements OnInit {
  productId: number;
  subscription = new Subscription();
  chapters: Chapter[];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private chapterService: ChapterService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.productId = +params.productId;
      this.chapterService.fetchChaptersByProduct(this.productId);
      this.subscription =  this.chapterService.chaptersChanged.subscribe(chapters => {
        this.chapters = this.chapterService.getChapters();
        if (this.chapters.length !== 0) {
          this.router.navigate(['product/', this.productId, this.chapters[0].id]);
        }
      });
      // this.router.navigate(['product/', this.productId, this.chapters[0].id]);
    });

  }

}
