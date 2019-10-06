import {Component, OnDestroy, OnInit} from '@angular/core';
import {Topic} from '../../shared/topic.model';
import {TopicService} from '../topic.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit, OnDestroy {
  topics: Topic[] = [];
  private subscription = new Subscription();

  constructor(private topicService: TopicService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.topicService.fetchTopics();
    this.subscription =  this.topicService.topicsChanged.subscribe(topics => {
      this.topics = this.topicService.getTopics();
    });
  }

  onNewTopic() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
