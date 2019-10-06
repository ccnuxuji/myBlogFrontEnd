import {Component, Input, OnInit} from '@angular/core';
import {Chapter} from '../../shared/chapter.model';
import {ChapterService} from './chapter.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-chapter-list',
  templateUrl: './chapter-list.component.html',
  styleUrls: ['./chapter-list.component.css']
})
export class ChapterListComponent implements OnInit {
  @Input() productId: number;

  subscription = new Subscription();
  chapters: Chapter[];

  constructor(private chapterService: ChapterService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.chapterService.fetchChaptersByProduct(this.productId);
    this.subscription =  this.chapterService.chaptersChanged.subscribe(chapters => {
      this.chapters = this.chapterService.getChapters();
    });
  }

  onNewChapter() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
