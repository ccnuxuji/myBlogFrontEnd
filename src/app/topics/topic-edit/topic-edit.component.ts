import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {TopicService} from '../topic.service';

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
    console.log(this.topicForm.value);
    this.topicService.updateTopic(this.topicForm.value);
    this.onCancel();
  }

  onDelete() {
    this.topicService.deleteTopic(this.topicId);
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let topicId = null;
    let topicName = '';
    let topicRank = null;

    if (this.editMode) {
      this.topicService.fetchTopics();
      let topic = this.topicService.getTopicById(this.topicId);
      // console.log(topic);
      this.topicService.topicsChanged.subscribe(topics => {
        topic = this.topicService.getTopicById(this.topicId);
        topicId = topic.id;
        topicName = topic.name;
        topicRank = topic.ord;
        this.topicForm = new FormGroup({
          id: new FormControl(topicId),
          name: new FormControl(topicName, Validators.required),
          ord: new FormControl(topicRank, Validators.required)
        });
      });
      topicId = topic.id;
      topicName = topic.name;
      topicRank = topic.ord;
    }

    this.topicForm = new FormGroup({
      id: new FormControl(topicId),
      name: new FormControl(topicName, Validators.required),
      ord: new FormControl(topicRank, Validators.required)
    });
  }

}
