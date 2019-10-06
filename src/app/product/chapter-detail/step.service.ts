import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Step} from '../../shared/step.model';

@Injectable({
  providedIn: 'root'
})
export class StepService {
  private steps: Step[] = [];
  stepsChanged = new Subject<Step[]>();

  private API = '//localhost:8080/techroad';
  private stepAPI = this.API + '/steps_chapter';
  private stepUrl = this.API + '/steps';

  constructor(private http: HttpClient) { }

  fetchStepsByChapter(chapterId: number) {
    const para = {cid: String(chapterId)};
    this.http.get<Step[]>(this.stepAPI, {params: para}).
    subscribe(steps => {
      this.setSteps(steps);
      console.log(steps);
    });
  }

  submitStep(step: any) {
    this.http.put(this.stepUrl, step).subscribe(
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
