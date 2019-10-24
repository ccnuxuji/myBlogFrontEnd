import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

import {Step} from '../../shared/step.model';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StepService {
  private steps: Step[] = [];
  stepsChanged = new Subject<Step[]>();

  constructor(private http: HttpClient) { }

  addStep(step: Step) {
    return this.http.post(
      environment.API + '/steps',
      step
    );
  }

  deleteStep(stepId: number) {
    return this.http.delete(
      environment.API +  '/steps/' + String(stepId)
    );
  }

  updateStep(step: Step) {
    return this.http.put(
      environment.API + '/steps',
      step
    );
  }

  getStep(stepId: number) {
    return this.http.get(
      environment.API + '/steps/' + String(stepId)
    );
  }

  fetchStepsByChapter(chapterId: number) {
    const para = {cid: String(chapterId)};
    return this.http.get<Step[]>(environment.API + '/steps_chapter', {params: para})
      .pipe(
        tap(res => {
          this.setSteps(res);
          console.log(res);
        })
      );
  }

  setSteps(steps: Step[]) {
    this.steps = steps;
    this.stepsChanged.next(steps.slice());
  }

  getSteps() {
    return this.steps.slice();
  }
}
