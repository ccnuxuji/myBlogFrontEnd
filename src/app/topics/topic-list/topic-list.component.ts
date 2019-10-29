import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';

import {Topic} from '../../shared/topic.model';
import {TopicService} from '../topic.service';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit, OnDestroy {
  topics: Topic[] = [];
  isAdminLogin = false;
  subscription = new Subscription();

  constructor(private topicService: TopicService,
              private router: Router,
              private route: ActivatedRoute,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.topics = this.topicService.getTopics();
    this.subscription = this.topicService.topicsChanged.subscribe(topics => {
      this.topics = topics;
    });
    this.subscription = this.authService.user.subscribe(user => {
      this.isAdminLogin = !!user && user.name === 'ccnuxuji';
    });
  }

  onNewTopic() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
