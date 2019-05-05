import {Component, Input, OnInit} from '@angular/core';
import {StudentQuestionItemModel} from './student-question-item.model';

@Component({
  selector: 'app-student-question-item',
  templateUrl: './student-question-item.component.html',
  styleUrls: ['./student-question-item.component.scss']
})
export class StudentQuestionItemComponent implements OnInit {

  @Input()
  studentQuestion: StudentQuestionItemModel;

  constructor() {
  }

  ngOnInit() {
  }

}
