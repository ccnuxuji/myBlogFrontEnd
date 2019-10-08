import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
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

  fetchStepsByChapter(chapterId: number) {
    const para = {cid: String(chapterId)};
    this.http.get<Step[]>(environment.API + '/steps_chapter', {params: para}).
    subscribe(steps => {
      this.setSteps(steps);
      console.log(steps);
    });
  }

  submitStep(step: any) {
    this.http.put(environment.API + '/steps', step).subscribe(
      response => {
        console.log(response);
      }
    );
  }

  setSteps(steps: Step[]) {
    this.steps = steps;
    this.stepsChanged.next(steps.slice());
  }

  getSteps() {
    return this.steps;
  }
}
