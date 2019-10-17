import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Topic} from '../shared/topic.model';
import {Observable, Subject} from 'rxjs';
import {environment} from '../../environments/environment';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TopicService {
  topicsChanged = new Subject<Topic[]>();
  private topics: Topic[] = [];

  constructor(private http: HttpClient) { }

  fetchTopics() {
    return this.http.get<Topic[]>(environment.API + '/topics').
      pipe(
        tap(topics => {
          this.setTopics(topics);
        }),
    );
  }

  setTopics(topics: Topic[]) {
    this.topics = topics;
    this.topicsChanged.next(this.topics.slice());
  }

  getTopics() {
    return this.topics.slice();
  }

  getTopicById(topicId: number): Topic {
    let res: Topic = new Topic(null, null, '');
    this.topics.forEach(topic => {
      if (topic.id === topicId) {
        res = topic;
    }
    });
    return res;
  }

  updateTopic(topic: Topic) {
    return this.http.post(environment.API + '/topic', topic);
  }

  deleteTopic(topicId: number) {
    this.http.delete(environment.API + '/topic/' + topicId).
    subscribe(response => {
      console.log(response);
    });
  }
}
