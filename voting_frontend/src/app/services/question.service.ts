import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Question} from '../question/question.model';
import {HttpClient} from '@angular/common/http';
import {UserService} from './user.service';
import {AnswerResponse} from './model/answer-response.model';
import {Answer} from '../answer/answer.model';

@Injectable({providedIn: 'root'})
export class QuestionService {

  question = new BehaviorSubject<Question>(new Question());

  constructor(private http: HttpClient,
              private userService: UserService) {
  }

  public getLastQuestion(): void {
    //this.http.get<Question>('/question/last')
     // .subscribe(question => this.question.next(question));
  }

  public answerQuestion(question: Question, answer: Answer<any>): Observable<any> {
    const body = AnswerResponse.create(question, answer, this.userService.getUserId());
    return this.http.post('vote', body);
  }
  public getListOfvoteYesCount() {
    return this.http.get<number[]>('/question/NumberVoteYes');
  }

  public getListOfvoteNoCount() {
    return this.http.get<number[]>('/question/NumberVoteNo');
  }

  public getListOfTitles(){
    return this.http.get<string[]>('/question/title');
  }

}
