// import {Component, Inject, Input, OnInit} from '@angular/core';
// import {HttpClient} from '@angular/common/http';
// import {Answer} from "../answer/answer.model";
// import {AutoQuestion} from "./auto-question.model";
//
// import {AutoQuestionService} from "../services/auto-question.service";
// import {interval, Unsubscribable} from 'rxjs';
// import {MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from "@angular/material";
// import {ToasterService} from "angular2-toaster";
// import {QuestionService} from '../services/question.service';
// // export interface DialogData {
// //   a_question: string;
// // }
//
// const answersCached: Answer<boolean>[] =
//     [new Answer('Yes', true, {'background-color': '#c2185b'}),
//       new Answer('No', false, {'background-color': '#c2185b'})];
//
// @Component({
//   selector: 'app-auto-question',
//   templateUrl: './auto-question.component.html',
//   styleUrls: ['./auto-question.component.scss']
// })
// export class AutoQuestionComponent implements OnInit {
//
//   public answers: Answer<any>[] = answersCached;
//   public buttonDisabled = false;
//   public autoQuestion:AutoQuestion;
//   public autoQuestionSubscription:Unsubscribable;
//
//   @Input()
//   m = "Auto-question";
//   AutoQuestion: any;
//
//   //messages: string[] = [];
//
//
//   constructor(private httpClient: HttpClient,
//               private autoQuestionService:AutoQuestionService,
//              // private toaster: ToasterService
//               //private questionService: QuestionService
//   ) { }
//
//   ngOnInit(): void {
//        this.answer();
//   }
//   public askQuestion():void{
//     this.autoQuestionService.getLastAutoQuestion(new Date())
//
//   }
//
//   private answer(): void {
//
//    //this.httpClient.get<>('').subscribe(aq => this.aq );
//     //interval(1000)
//   }
//
//   public selectedAnswer(answer: Answer<any>): void {
//     this.autoQuestionService.answerQuestion(this.autoQuestion, answer)
//         .subscribe(() => {
//               this.buttonDisabled = true}
//              // this.toaster.pop('success', 'Thanks for answer.');
//            // },
//            // err => this.toaster.pop('error', err.error)
//         );
//   }
//
// }
import {Component, OnDestroy, OnInit} from '@angular/core';
import {AutoQuestionService} from '../services/auto-question.service';
import {AutoQuestion} from './auto-question.model';
import {Answer} from '../answer/answer.model';
import {Unsubscribable} from 'rxjs';
import {filter} from 'rxjs/operators';

//import {Observable} from 'rxjs/Rx';

const answersCached: Answer<boolean>[] =
    [new Answer('Yes', true, {'background-color': '#4CAF50'}),
        new Answer('No', false, {'background-color': 'red'})];

@Component({
    selector: 'app-autoquestion',
    templateUrl: './auto-question.component.html',
    styleUrls: ['./auto-question.component.scss']
})


export class AutoQuestionComponent implements OnInit, OnDestroy {

    public autoQuestion: AutoQuestion;
    public answers: Answer<any>[] = answersCached;
    public buttonDisabled = false;
    private autoQuestionSubscription: Unsubscribable;

    constructor(private autoQuestionService: AutoQuestionService) {
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

    public askQuestion(): void {
        this.autoQuestionService.getLastAutoQuestion(new Date());
    }

    public selectedAnswer(answer: Answer<any>): void {
        this.autoQuestionService.answerQuestion(this.autoQuestion, answer)
            .subscribe(() => this.buttonDisabled = true)
    }

    ngOnDestroy(): void {
        if (this.autoQuestionSubscription) {
            this.autoQuestionSubscription.unsubscribe();
        }
    }



}