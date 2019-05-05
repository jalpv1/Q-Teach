import {Component, OnInit} from '@angular/core';
import {StudentQuestionItemModel} from '../student-question-item/student-question-item.model';

@Component({
  selector: 'app-student-question-list',
  templateUrl: './student-question-list.component.html',
  styleUrls: ['./student-question-list.component.css']
})
export class StudentQuestionListComponent implements OnInit {

  studentQuestions: StudentQuestionItemModel[] = stQ;

  constructor() {
  }

  ngOnInit() {
  }

}

const stQ: StudentQuestionItemModel[] = [
  {id: 1, title: 't1', subtitle: 's1', question: 'Q1'},
  {id: 2, title: 't2', subtitle: 's2', question: 'Q2'},
  {id: 3, title: 't3', subtitle: 's3', question: 'Q3'},
];
