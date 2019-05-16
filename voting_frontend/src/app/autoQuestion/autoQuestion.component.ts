import {Component, OnDestroy, OnInit} from '@angular/core';
import {AutoQuestionService} from '../services/autoQuestion.service';
import {AutoQuestion} from './autoQuestion.model';
import {Answer} from '../answer/answer.model';
import {ToasterService} from 'angular2-toaster';
import {Unsubscribable} from 'rxjs';
import {filter} from 'rxjs/operators';

//import {Observable} from 'rxjs/Rx';

const answersCached: Answer<boolean>[] =
  [new Answer('Yes', true, {'background-color': '#4CAF50'}),
    new Answer('No', false, {'background-color': 'red'})];

@Component({
  selector: 'app-autoquestion',
  templateUrl: './autoQuestion.component.html',
  styleUrls: ['./autoQuestion.component.scss']
})



export class autoQuestionComponent implements OnInit, OnDestroy {

  public autoQuestion:AutoQuestion;
  public answers: Answer<any>[] = answersCached;
  public buttonDisabled = false;
  private autoQuestionSubscription: Unsubscribable;

  constructor(private autoQuestionService: AutoQuestionService,
              private toaster: ToasterService) {
  }

  ngOnInit(): void {
    this.autoQuestionSubscription = this.autoQuestionService.question
      .pipe(filter(q => {
        if (!this.autoQuestion && q) {
          return true;
        }

        if (this.autoQuestion && q && q.id !== this.autoQuestion.id) {
          return true;
        } else {
          return false;
        }
      }))
      .subscribe(autoQuestion => {
        this.autoQuestion = autoQuestion;
        this.buttonDisabled = false;
      });
    //let timer = Observable.timer(2000,1000);
    //timer.subscribe(this.onTimer);
  }

  public askQuestion():void {
    this.autoQuestionService.getLastAutoQuestion(new Date());
}

  public selectedAnswer(answer: Answer<any>): void {
    this.autoQuestionService.answerQuestion(this.autoQuestion, answer)
      .subscribe(() => {
          this.buttonDisabled = true;
          this.toaster.pop('success', 'Thanks for answer.');
        },
        err => this.toaster.pop('error', err.error));
  }

  ngOnDestroy(): void {
    if (this.autoQuestionSubscription) {
      this.autoQuestionSubscription.unsubscribe();
    }
  }

}
