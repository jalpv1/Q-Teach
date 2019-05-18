import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {AutoQuestion} from '../auto-question/auto-question.model';
import {HttpClient, HttpParams} from '@angular/common/http';
import {UserService} from './user.service';
//import {AnswerResponse} from './model/answer-response.model';
import {Answer} from '../answer/answer.model';


import {Pipe, PipeTransform} from '@angular/core';
import {DatePipe, formatDate} from '@angular/common';
import {AnswerResponse} from "./model/answer-response.model";

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
export class AutoQuestionService {

    question = new BehaviorSubject<AutoQuestion>(new AutoQuestion());

    constructor(private http: HttpClient,
                private userService: UserService) {
    }

    public getLastQuestion(): void {
        this.http.get<AutoQuestion>('/autoquestion/last')
            .subscribe(question => this.question.next(question));
    }

    public getLastAutoQuestion(date: Date): void {
        let myDate = formatDate(date, "MM-dd-yyyy hh:mm", "en_US");
        const options = {params: new HttpParams().set('date', myDate)};
        this.http.get<AutoQuestion>('autoquestion/auto', options)
            .subscribe(question => this.question.next(question));
    }

    public answerQuestion(question: AutoQuestion, answer: Answer<any>): Observable<any> {
        const body = AnswerResponse.create(question, answer, this.userService.getUserId());
        return this.http.post('autovote', body);
    }

    public getListOfTitles(){
        return this.http.get<string[]>('/auto-question/title');
    }

    public getListOfvoteYesCount() {
        return this.http.get<number[]>('/auto-question/NumberVoteYes');
    }

    public getListOfvoteNoCount() {
        return this.http.get<number[]>('/auto-question/NumberVoteNo');
    }

    public getYes(){
        return this.http.get<number[]>('/autovote/yes');
    }

}


// import {Injectable} from '@angular/core';
// import {BehaviorSubject, Observable} from 'rxjs';
// import {AutoQuestion} from '../auto-question/auto-question.model';
// import {HttpClient, HttpParams} from '@angular/common/http';
// import {UserService} from './user.service';
// import {AnswerResponse} from './model/answer-response.model';
// import {Answer} from '../answer/answer.model';
//
//
// import { Pipe, PipeTransform} from '@angular/core';
// import {DatePipe, formatDate} from '@angular/common';
//
//
// @Injectable({providedIn: 'root'})
// export class AutoQuestionService{
//
//   question = new BehaviorSubject<AutoQuestion>(new  AutoQuestion());
//
//   constructor(private http: HttpClient,
//               private userService: UserService) {
//   }
//
//   public getLastQuestion(): void {
//     this.http.get< AutoQuestion>('/autoquestion/last')
//         .subscribe(autoquestion => this.question.next(autoquestion));
//   }
//   public getLastAutoQuestion(date:Date): void {
//
//     let myDate = formatDate(date,"MM-dd-yyyy hh:mm","en_US");
//
//     const options = { params: new HttpParams().set('date', myDate) };
//
//     this.http.get< AutoQuestion>('autoquestion/auto', options)
//         .subscribe(autoquestion => this.question.next(autoquestion));
//   }
//
//   public answerQuestion(autoquestion:  AutoQuestion, answer: Answer<any>): Observable<any> {
//     const body = AnswerResponse.create(autoquestion, answer, this.userService.getUserId());
//     return this.http.post('autovote', body);
//   }
//
//   public count()
//   {
//     return this.count();
//   }
//
//
// }