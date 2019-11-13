import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {ResponseData} from '../../../topics/topic-edit/topic-edit.component';
import {Step} from '../../../shared/step.model';
import {StepService} from '../step.service';

@Component({
  selector: 'app-step-edit',
  templateUrl: './step-edit.component.html',
  styleUrls: ['./step-edit.component.css']
})
export class StepEditComponent implements OnInit {

  chapterId: number;
  stepId: number;
  editMode = false;
  stepForm: FormGroup;
  currContent = null;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private stepService: StepService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.chapterId = +params.chapterId;
      this.stepId = +params.stepId;
      this.editMode = params.stepId !== 'new';
      this.initForm();
    });
  }

  initForm() {
    let step = new Step();
    step.cid = this.chapterId;


    if (this.editMode) {
      this.stepService.getStep(this.stepId).subscribe((res: ResponseData) => {
        step = res.data;
        step.cid = this.chapterId;
        this.currContent = step.content;
        this.stepForm = new FormGroup({
          id: new FormControl(step.id),
          name: new FormControl(step.name, Validators.required),
          cid: new FormControl(step.cid, Validators.required),
          ord: new FormControl(step.ord, Validators.required),
          description: new FormControl(step.description),
          content: new FormControl(step.content)
        });
      });
    }
    this.stepForm = new FormGroup({
      id: new FormControl(step.id),
      name: new FormControl(step.name, Validators.required),
      cid: new FormControl(step.cid, Validators.required),
      ord: new FormControl(step.ord, Validators.required),
      description: new FormControl(step.description),
      content: new FormControl(step.content)
    });

  }

  getContent(event: string) {
    this.currContent = event;
    console.log(event);
  }

  onSubmit() {
    if (this.editMode) {
      this.stepService.updateStep(this.stepForm.value)
        .subscribe(res => {
          this.stepService.fetchStepsByChapter(this.chapterId).subscribe();
          this.onCancel();
        });
    } else {
      console.log(this.stepForm.value);
      this.stepService.addStep(this.stepForm.value)
        .subscribe(res => {
          this.stepService.fetchStepsByChapter(this.chapterId).subscribe();
          this.onCancel();
        });
    }
  }

  onDelete() {
    this.stepService.deleteStep(this.stepId).subscribe(res => {
      this.stepService.fetchStepsByChapter(this.chapterId).subscribe();
      this.onCancel();
    });
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }


}
