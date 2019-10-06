import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ChapterService} from '../chapter-list/chapter.service';
import {Chapter} from '../../shared/chapter.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-chapter-edit',
  templateUrl: './chapter-edit.component.html',
  styleUrls: ['./chapter-edit.component.css']
})
export class ChapterEditComponent implements OnInit {
  chapterId: number;
  editMode = false;
  chapterForm: FormGroup;
  subscription: Subscription = new Subscription();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private chapterService: ChapterService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.chapterId = +params.chapterId;
      console.log(params);
      console.log('cid is:' + this.chapterId);
      this.editMode = !isNaN(this.chapterId);
      this.initForm();
    });
  }

  onSubmit() {
    console.log(this.chapterForm.value);
    this.chapterService.updateChapter(this.chapterForm.value);
    this.onCancel();
  }

  onDelete() {
    this.chapterService.deleteChapter(this.chapterId);
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  initForm() {
    let chapterId = null;
    let chapterName = '';
    let chapterPid = null;
    let chapterOrd = null;
    let chapterDescription = '';

    if (this.editMode) {
      let chapter: Chapter = this.chapterService.getChapterById(this.chapterId);
      this.subscription = this.chapterService.chaptersChanged.subscribe(data => {
        chapter = this.chapterService.getChapterById(this.chapterId);
        chapterId = chapter.id;
        chapterName = chapter.name;
        chapterPid = chapter.pid;
        chapterOrd = chapter.ord;
        chapterDescription = chapter.description;
        this.chapterForm = new FormGroup({
          id: new FormControl(chapterId),
          name: new FormControl(chapterName, Validators.required),
          pid: new FormControl(chapterPid, Validators.required),
          ord: new FormControl(chapterOrd, Validators.required),
          description: new FormControl(chapterDescription)
        });
      });
      chapterId = chapter.id;
      chapterName = chapter.name;
      chapterPid = chapter.pid;
      chapterOrd = chapter.ord;
      chapterDescription = chapter.description;
    }

    this.chapterForm = new FormGroup({
      id: new FormControl(chapterId),
      name: new FormControl(chapterName, Validators.required),
      pid: new FormControl(chapterPid, Validators.required),
      ord: new FormControl(chapterOrd, Validators.required),
      description: new FormControl(chapterDescription)
    });

  }

}
