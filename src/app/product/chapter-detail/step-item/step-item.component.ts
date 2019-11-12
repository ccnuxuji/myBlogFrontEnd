import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';

import {Step} from '../../../shared/step.model';
import {AuthService} from '../../../auth/auth.service';

@Component({
  selector: 'app-step-item',
  templateUrl: './step-item.component.html',
  styleUrls: ['./step-item.component.css']
})
export class StepItemComponent implements OnInit, OnDestroy {
  @Input() step: Step;
  isAdminLogin = false;
  userSub = new Subscription();

  constructor(private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAdminLogin = !!user && user.name === 'ccnuxuji';
    });
  }

  onEdit() {
    this.router.navigate([this.step.id], {relativeTo: this.route});
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

}
