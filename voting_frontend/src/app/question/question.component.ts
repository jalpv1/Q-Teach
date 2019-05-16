import {Component, OnDestroy, OnInit} from '@angular/core';
import {QuestionService} from '../services/question.service';
import {Question} from './question.model';
import {Answer} from '../answer/answer.model';
import {ToasterService} from 'angular2-toaster';
import {Unsubscribable} from 'rxjs';
import {filter} from 'rxjs/operators';
import {HttpClient, HttpParams} from "@angular/common/http";

const answersCached: Answer<boolean>[] =
  [new Answer('Yes', true, {'background-color': '#4CAF50'}),
    new Answer('No', false, {'background-color': 'red'})];

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit, OnDestroy {

  public question: Question;
  public answers: Answer<any>[] = answersCached;
  public buttonDisabled = false;
  private questionSubscription: Unsubscribable;

  constructor(private questionService: QuestionService,
              private toaster: ToasterService,

              private httpClient: HttpClient){

  }

  ngOnInit(): void {
    this.questionSubscription = this.questionService.question
      .pipe(filter(q => {
        if (!this.question && q) {
          return true;
        }

        if (this.question && q && q.id !== this.question.id) {
          return true;
        } else {
          return false;
        }
      }))
      .subscribe(question => {
        this.question = question;
        this.buttonDisabled = false;
      });
  }

  public selectedAnswer(answer: Answer<any>): void {
    this.questionService.answerQuestion(this.question, answer)
      .subscribe(() => {
          this.buttonDisabled = true;
          this.toaster.pop('success', 'Thanks for answer.');
        },
        err => this.toaster.pop('error', err.error));
  }

  ngOnDestroy(): void {
    if (this.questionSubscription) {
      this.questionSubscription.unsubscribe();
    }
  }

////////////for Nastya Sorting by likes///////////your ass)))
  SortByLikes(answer: Answer<any>): void {
    //const params = new HttpParams().append('chatQuestion', "fgd1");
    this.httpClient.get<string[]>('http://localhost:8082/chat/sortByLikes')
      .subscribe(str=>console.log(str[3]));
    // this.questionService.SortChatQuest();

  }
  like(answer: Answer<any>): void {
  //  const params = new HttpParams().append('chatQuestionId', 11111);
  //  this.httpClient.put('chat/like', null, {params})
   //   .subscribe(() => console.log('Good'));
  }
}
