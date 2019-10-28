import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';

import {TopicService} from '../topic.service';
import {Topic} from '../../shared/topic.model';

export interface ResponseData {
  code: number;
  data: any;
  message: string;
}

@Component({
  selector: 'app-topic-edit',
  templateUrl: './topic-edit.component.html',
  styleUrls: ['./topic-edit.component.css']
})
export class TopicEditComponent implements OnInit {
  topicId: number;
  editMode = false;
  topicForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private topicService: TopicService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.topicId = +params.topicId;
      this.editMode = params.topicId != null;
      this.initForm();
    });
  }

  onSubmit() {
    if (this.editMode) {
      this.topicService.updateTopic(this.topicForm.value)
        .subscribe(res => {
          this.topicService.fetchTopics().subscribe();
          // this.onCancel();
        });
    } else {
      this.topicService.addTopic(this.topicForm.value)
        .subscribe(res => {
          this.topicService.fetchTopics().subscribe();
          // this.onCancel();
      });
    }
  }

  onDelete() {
    this.topicService.deleteTopic(this.topicId)
      .subscribe(res => {
        this.topicService.fetchTopics().subscribe();
        this.onCancel();
    });
  }

  onCancel() {
    this.router.navigate(['../../'], {relativeTo: this.route});
  }

  private initForm() {
    let topic = new Topic();

    if (this.editMode) {
      this.topicService.getTopic(this.topicId)
        .subscribe((res: ResponseData) => {
          topic = res.data;
          this.topicForm = new FormGroup({
            id: new FormControl({value: topic.id, disabled: true}),
            name: new FormControl(topic.name, Validators.required),
            ord: new FormControl(topic.ord, Validators.required)
          });
        });
    }

    this.topicForm = new FormGroup({
      id: new FormControl({value: topic.id, disabled: true}),
      name: new FormControl(topic.name, Validators.required),
      ord: new FormControl(topic.ord, Validators.required)
    });
  }

}
