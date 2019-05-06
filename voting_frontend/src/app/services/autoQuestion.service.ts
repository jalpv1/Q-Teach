import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {AutoQuestion} from '../autoQuestion/autoQuestion.model';
import {HttpClient, HttpParams} from '@angular/common/http';
import {UserService} from './user.service';
import {AnswerResponse} from './model/answer-response.model';
import {Answer} from '../answer/answer.model';


import { Pipe, PipeTransform} from '@angular/core';
import {DatePipe, formatDate} from '@angular/common';

@Pipe({
  name: 'dateFormat'
})

export class DateFormatPipe extends DatePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    ///MMM/dd/yyyy
    return super.transform(value, "MMM/dd/yyyy");
  }
}

@Injectable({providedIn: 'root'})
export class AutoQuestionService{

  question = new BehaviorSubject<AutoQuestion>(new  AutoQuestion());

  constructor(private http: HttpClient,
              private userService: UserService) {
  }

  public getLastQuestion(): void {
    this.http.get< AutoQuestion>('/question/last')
      .subscribe(question => this.question.next(question));
  }
  public getLastAutoQuestion(date:Date): void {

    let myDate = formatDate(date,"MM-dd-yyyy hh:mm","en_US");

    const options = { params: new HttpParams().set('date', myDate) };

    this.http.get< AutoQuestion>('api/autoquestion/auto', options)
      .subscribe(question => this.question.next(question));
  }

  public answerQuestion(question:  AutoQuestion, answer: Answer<any>): Observable<any> {
    const body = AnswerResponse.create(question, answer, this.userService.getUserId());
    return this.http.post('vote', body);
  }

}