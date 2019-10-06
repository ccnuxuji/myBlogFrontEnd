import {Component, Input, OnInit} from '@angular/core';
import {Chapter} from '../../../shared/chapter.model';

@Component({
  selector: 'app-chapter-item',
  templateUrl: './chapter-item.component.html',
  styleUrls: ['./chapter-item.component.css']
})
export class ChapterItemComponent implements OnInit {

  @Input() chapter: Chapter;

  constructor() { }

  ngOnInit() {
  }

}
