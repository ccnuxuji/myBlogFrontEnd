import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Subscription} from 'rxjs';

import {Step} from '../../shared/step.model';
import {Chapter} from '../../shared/chapter.model';
import {StepService} from './step.service';
import {AuthService} from '../../auth/auth.service';
import {ChapterService} from '../chapter-list/chapter.service';
import {ResponseData} from '../../topics/topic-edit/topic-edit.component';

@Component({
  selector: 'app-chapter-detail',
  templateUrl: './chapter-detail.component.html',
  styleUrls: ['./chapter-detail.component.css']
})
export class ChapterDetailComponent implements OnInit, OnDestroy {
  userSub = new Subscription();
  stepSub = new Subscription();
  isAdminLogin = false;

  chapterId: number;
  currChapter = new Chapter();
  steps: Step[] = [];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private stepService: StepService,
              private authService: AuthService,
              private chapterService: ChapterService,
               ) { }

  ngOnInit() {
    this.steps = this.stepService.getSteps();

    this.userSub = this.authService.user.subscribe(user => {
      this.isAdminLogin = !!user && user.name === 'ccnuxuji';
    });

    this.route.params.subscribe(
      (params: Params) => {
        this.chapterId = +params.chapterId;
        this.chapterService.getChapter(this.chapterId)
          .subscribe((res: ResponseData) => {
            this.currChapter = res.data;
            this.stepSub = this.stepService.stepsChanged.subscribe(steps => {
              this.steps = steps;
            });
          });
      });

  }

  editChapter() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  newStep() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

}
