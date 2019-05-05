import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Question} from './question-finder.model';
import {StudentQuestionItemModel} from '../student-question/student-question-item/student-question-item.model';

@Component({
  selector: 'app-question-finder',
  templateUrl: './question-finder.component.html',
  styleUrls: ['./question-finder.component.scss']
})
export class QuestionFinderComponent implements OnInit {

  question: Question;
  studentQuestion: StudentQuestionItemModel;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
  }

  find(id: string): void {
    this.httpClient.get<Question>(`question/${parseInt(id, 10)}`)
      .subscribe(q => {
        this.question = q;
        this.studentQuestion = {
          id: q.id,
          title: q.title,
          subtitle: '',
          question: ''
        };
      });
  }

}
