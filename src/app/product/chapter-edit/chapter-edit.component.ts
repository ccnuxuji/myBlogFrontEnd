import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router, RouterStateSnapshot} from '@angular/router';

import {ChapterService} from '../chapter-list/chapter.service';
import {Chapter} from '../../shared/chapter.model';
import {ResponseData} from '../../topics/topic-edit/topic-edit.component';

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
    if (this.editMode) {
      this.chapterService.updateChapter(this.chapterForm.value)
        .subscribe(res => {
          this.chapterService.fetchChaptersByProduct(this.productId).subscribe();
          this.onCancel();
        });
    } else {
      this.chapterService.addChapter(this.chapterForm.value)
        .subscribe(res => {
          this.chapterService.fetchChaptersByProduct(this.productId).subscribe();
          this.onCancel();
        });
    }
  }

  onDelete() {
    this.chapterService.deleteChapter(this.chapterId)
      .subscribe(res => {
        this.chapterService.fetchChaptersByProduct(this.productId).subscribe();
      });
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  initForm() {
    let chapter = new Chapter();
    chapter.pid = this.productId;
    if (this.editMode) {
      this.chapterService.getChapter(this.chapterId)
        .subscribe((res: ResponseData) => {
          chapter = res.data;
          this.chapterForm = new FormGroup({
            id: new FormControl(chapter.id),
            name: new FormControl(chapter.name, Validators.required),
            pid: new FormControl(this.productId, Validators.required),
            ord: new FormControl(chapter.ord, Validators.required),
            description: new FormControl(chapter.description)
          });
        });
    }

    this.chapterForm = new FormGroup({
      id: new FormControl(chapter.id),
      name: new FormControl(chapter.name, Validators.required),
      pid: new FormControl(this.productId, Validators.required),
      ord: new FormControl(chapter.ord, Validators.required),
      description: new FormControl(chapter.description)
    });
  }

}
