import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {tap} from 'rxjs/operators';

import {Topic} from '../shared/topic.model';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TopicService {
  topicsChanged = new Subject<Topic[]>();
  private topics: Topic[] = [];

  constructor(private http: HttpClient) { }

  addTopic(topic: Topic) {
    return this.http.post(environment.API + '/topic', topic);
  }

  deleteTopic(topicId: number) {
    return this.http.delete(environment.API + '/topic/' + topicId);
  }

  updateTopic(topic: Topic) {
    return this.http.put(environment.API + '/topic', topic);
  }

  getTopic(topicId: number) {
    return this.http.get(environment.API + '/topic/' + topicId);
  }

  fetchTopics() {
    return this.http.get<Topic[]>(environment.API + '/topics').
      pipe(
        tap(topics => {
          this.setTopics(topics);
        })
    );
  }

  setTopics(topics: Topic[]) {
    this.topics = topics;
    this.topicsChanged.next(this.topics.slice());
  }

  getTopics() {
    return this.topics.slice();
  }
}
