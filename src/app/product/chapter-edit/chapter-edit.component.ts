import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router, RouterStateSnapshot} from '@angular/router';

import {ChapterService} from '../chapter-list/chapter.service';
import {Chapter} from '../../shared/chapter.model';

@Component({
  selector: 'app-chapter-edit',
  templateUrl: './chapter-edit.component.html',
  styleUrls: ['./chapter-edit.component.css']
})
export class ChapterEditComponent implements OnInit {
  chapterId: number;
  editMode = false;
  chapterForm: FormGroup;
  productId: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private chapterService: ChapterService) { }

  ngOnInit() {
    this.route.parent.params.subscribe((params: Params) => {
      this.productId = +params.productId;

    });

    this.route.params.subscribe((params: Params) => {
      this.chapterId = +params.chapterId;
      this.editMode = !isNaN(this.chapterId);
      this.initForm();
    });
  }

  onSubmit() {
    console.log(this.chapterForm.value);
    if (this.editMode) {
      this.chapterService.updateChapter(this.chapterForm.value)
        .subscribe(res => {
          console.log(res);
        });
    } else {
      this.chapterService.addChapter(this.chapterForm.value)
        .subscribe(res => {
          console.log(res);
        });
    }
    this.onCancel();
  }

  onDelete() {
    this.chapterService.deleteChapter(this.chapterId)
      .subscribe(res => {
        console.log(res);
      });
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  initForm() {
    let chapterId = null;
    let chapterName = '';
    let chapterPid = this.productId;
    let chapterOrd = null;
    let chapterDescription = '';

    if (this.editMode) {
      this.chapterService.getChapterById(this.chapterId)
        .subscribe((chapter: Chapter) => {
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
