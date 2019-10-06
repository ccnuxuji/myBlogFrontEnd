import {Injectable} from '@angular/core';
import {Topic} from '../shared/topic.model';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopicService {
  topicsChanged = new Subject<Topic[]>();

  private API = '//localhost:8080/techroad';
  private topicsAPI = this.API + '/topics';
  private topicAPI = this.API + '/topic';
  private topics: Topic[] = [];

  constructor(private http: HttpClient) { }

  fetchTopics() {
    this.http.get<Topic[]>(this.topicsAPI).
      subscribe(topics => {
        this.setTopics(topics);
        console.log(topics);
    });
  }

  setTopics(topics: Topic[]) {
    this.topics = topics;
    this.topicsChanged.next(this.topics.slice());
  }

  getTopics() {
    return this.topics;
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
    this.http.post(this.topicAPI, topic).
    subscribe(response => {
      console.log(response);
    });
  }

  deleteTopic(topicId: number) {
    this.http.delete(this.topicAPI + '/' + topicId).
    subscribe(response => {
      console.log(response);
    });
  }
}
