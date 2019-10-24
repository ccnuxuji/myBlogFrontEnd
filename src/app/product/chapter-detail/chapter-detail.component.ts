import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Subscription} from 'rxjs';

import {Step} from '../../shared/step.model';
import {Chapter} from '../../shared/chapter.model';
import {StepService} from './step.service';
import {AuthService} from '../../auth/auth.service';
import {ChapterService} from '../chapter-list/chapter.service';

@Component({
  selector: 'app-chapter-detail',
  templateUrl: './chapter-detail.component.html',
  styleUrls: ['./chapter-detail.component.css']
})
export class ChapterDetailComponent implements OnInit, OnDestroy {
  userSub = new Subscription();
  isAdminLogin = false;

  currChapter: Chapter;
  currChapterName: string = null;
  chapterId: number;
  steps: Step[] = [];
  editorContent: string;
  currStep: Step = new Step(-1, -1, '', '', '');

  constructor(private router: Router,
              private route: ActivatedRoute,
              private stepService: StepService,
              private authService: AuthService,
              private chapterService: ChapterService
               ) { }

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAdminLogin = !!user && user.name === 'ccnuxuji';
    });

    this.route.params.subscribe(
      (params: Params) => {
        this.chapterId = +params.chapterId;
        this.chapterService.getChapterById(this.chapterId)
          .subscribe(chapter => {
            this.currChapter = chapter;
            this.currChapterName = this.currChapter.name;
          });
        this.steps = this.stepService.getSteps();
      });
  }

  editChapter() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  getContent(event: string) {
    this.editorContent = event;
    console.log(this.editorContent);
  }

  newStepClick() {
    const step = {
      id: null,
      name: '',
      description: '',
      cid: this.chapterId,
      content: this.editorContent
    };
    this.stepService.addStep(step).subscribe();
    location.reload();
  }

  editStepClick() {
    const step = {
      id: this.currStep.id,
      name: '',
      description: '',
      cid: this.chapterId,
      content: this.editorContent
    };
    this.stepService.updateStep(step).subscribe();
    console.log(step.id);
    location.reload();
  }

  deleteStepClick() {
    this.stepService.deleteStep(this.currStep.id).subscribe();
    location.reload();
  }

  clickCurrentStep(event: Step) {
    this.currStep = event;
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

}
