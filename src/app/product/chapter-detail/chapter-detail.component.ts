import {Component, OnDestroy, OnInit} from '@angular/core';
import {Step} from '../../shared/step.model';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Chapter} from '../../shared/chapter.model';
import {StepService} from './step.service';
import {ChapterService} from '../chapter-list/chapter.service';

@Component({
  selector: 'app-chapter-detail',
  templateUrl: './chapter-detail.component.html',
  styleUrls: ['./chapter-detail.component.css']
})
export class ChapterDetailComponent implements OnInit, OnDestroy {
  subscriptionStep  = new Subscription();
  subscriptionChapter  = new Subscription();

  chapter: Chapter = new Chapter(-1, -1, null, 'loading', '');
  chapterId: number;
  steps: Step[] = [];
  editorContent: string;
  currStep: Step = new Step(-1, -1, '', '', '');

  constructor(private router: Router,
              private route: ActivatedRoute,
              private stepService: StepService,
              private chapterService: ChapterService,
               ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.chapterId = +params.chapterId;
        this.stepService.fetchStepsByChapter(this.chapterId);
        this.subscriptionStep = this.stepService.stepsChanged.subscribe(
          steps => {
            this.steps = steps;
          });
        this.chapter = this.chapterService.getChapterById(this.chapterId);
        this.subscriptionChapter = this.chapterService.chaptersChanged.subscribe(chapters => {
          this.chapter = this.chapterService.getChapterById(this.chapterId);
        });
      });
  }

  onClick() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  getContent(event: string) {
    this.editorContent = event;
    console.log(this.editorContent);
  }

  newStepClick() {
    const step = {
      name: '',
      description: '',
      cid: this.chapterId,
      content: this.editorContent
    };
    this.stepService.submitStep(step);
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
    this.stepService.submitStep(step);
    console.log(step.id);
    location.reload();
  }

  clickCurrentStep(event: Step) {
    this.currStep = event;
  }

  ngOnDestroy(): void {
    this.subscriptionStep.unsubscribe();
    this.subscriptionChapter.unsubscribe();
  }

}
