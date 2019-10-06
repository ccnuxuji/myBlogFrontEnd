import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Step} from '../../../shared/step.model';

@Component({
  selector: 'app-step-item',
  templateUrl: './step-item.component.html',
  styleUrls: ['./step-item.component.css']
})
export class StepItemComponent implements OnInit {
  @Input() step: Step;
  @Output() currStep: EventEmitter<Step> = new EventEmitter();
  @ViewChild('stepEl', {static: true}) stepEl: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.currStep.emit(this.step);
    // this.stepEl.nativeElement.style.backgroundColor = 'grey';
  }

}
