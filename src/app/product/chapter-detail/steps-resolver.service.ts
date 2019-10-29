import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Step} from '../../shared/step.model';
import {Observable} from 'rxjs';
import {StepService} from './step.service';

@Injectable({
  providedIn: 'root'
})
export class StepsResolverService implements Resolve<Step[]> {

  constructor(private stepService: StepService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Step[]> | Promise<Step[]> | Step[] {
    const id = state.url.split(/[/?]/)[3];
    console.log('进来了');
    console.log(state.url.split(/[/?]/));
    console.log('续集');
    return this.stepService.fetchStepsByChapter(+id);
  }
}
