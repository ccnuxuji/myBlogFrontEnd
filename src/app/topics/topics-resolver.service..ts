import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

import {Observable} from 'rxjs';
import {Topic} from '../shared/topic.model';
import {TopicService} from './topic.service';

@Injectable({providedIn: 'root'})
export class TopicsResolverService implements Resolve<Topic[]> {

  constructor(private topicService: TopicService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Topic[]> | Promise<Topic[]> | Topic[] {
    this.topicService.fetchTopics().subscribe();
    return undefined;
  }

}
