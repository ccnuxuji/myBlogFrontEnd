import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Chapter} from '../../shared/chapter.model';
import {ChapterService} from './chapter.service';
import {Subscription} from 'rxjs';
import {AuthResponseData, AuthService} from '../../auth/auth.service';
import {ProductService} from '../../topics/topic-detail/product.service';
import {Product} from '../../shared/product.model';

@Component({
  selector: 'app-chapter-list',
  templateUrl: './chapter-list.component.html',
  styleUrls: ['./chapter-list.component.css']
})
export class ChapterListComponent implements OnInit, OnDestroy {
  @Input() productId: number;
  product: Product = new Product();
  chapters: Chapter[];
  userSub = new Subscription();
  chaptersSub = new Subscription();
  isAdminLogin = false;

  constructor(private chapterService: ChapterService,
              private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService,
              private productService: ProductService) { }

  ngOnInit() {
    this.chapters = this.chapterService.getChapters();

    this.productService.getProduct(this.productId).subscribe((res: AuthResponseData) => {
      this.product = res.data;
    });

    this.chaptersSub = this.chapterService.chaptersChanged.subscribe(chapters => {
      this.chapters = chapters;
    });

    this.userSub = this.authService.user.subscribe(user => {
      this.isAdminLogin = !!user && user.name === 'ccnuxuji';
    });
  }

  onNewChapter() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
    this.chaptersSub.unsubscribe();
  }

}
