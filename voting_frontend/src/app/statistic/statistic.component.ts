import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {AutoQuestionService} from "../services/auto-question.service";
import {interval} from "rxjs";
import {Answer} from "../answer/answer.model";
import {AutoQuestion} from "../auto-question/auto-question.model";
//import {Router} from "@angular/router";

@Component({
    selector: 'app-statistic',
    templateUrl: './statistic.component.html',
    styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {

    public autoQuestion:AutoQuestion;
    data: any;
    countYes :bigint;
    countNo :bigint;
    titles:string[] = [];
    test:string = "Fucking fuck";

    constructor(private httpClient: HttpClient) {}



    ngOnInit(): void {
        //this.loadData();
        //interval(1000)
        //    .subscribe(()=> this.(new Date()))
        interval(1000)
            this.loadData();
        this.getTitles();

    }


    /*getCountYes(): void {
        const params = new HttpParams().append('autoQuestionId', "1");
        this.httpClient.get<bigint>('http://localhost:8082/autovote/yes')
            .subscribe(str => this.countYes = str);

    }

    getCountNo(): void {
        const params = new HttpParams().append('autoQuestionId', "1");
        this.httpClient.get<bigint>('http://localhost:8082/autovote/no')
            .subscribe(str => this.countNo = str);

    }
*/
    private loadData(): void {
        // TODO
        // this.httpClient.get<>('').subscribe(data => this.data );
        //this.router.navigateByUrl(url);

    }

  /*  constructor(private questionService: AutoQuestionService) {};



    getListOfVoteYesCount() {
        return this.questionService.getListOfvoteYesCount();
    }
    getListOfVoteNoCount() {
        return this.questionService.getListOfvoteNoCount();
    }

    getListOfTitles(){
        return this.questionService.getListOfTitles();
    }
*/

    getTitles(): void {
        this.httpClient.get<string[]>('http://localhost:8082/autoquestion/title')
            .subscribe(str => this.titles = str);

    }
}
