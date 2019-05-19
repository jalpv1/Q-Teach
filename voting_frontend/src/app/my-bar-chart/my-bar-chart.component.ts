import { Component, OnInit } from '@angular/core';
import {AutoQuestionService} from "../services/auto-question.service";
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-my-bar-chart',
  templateUrl: './my-bar-chart.component.html',
  styleUrls: ['./my-bar-chart.component.scss']
})
export class MyBarChartComponent implements OnInit {
  constructor(private httpClient: HttpClient) { }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['Question1', 'Question2', 'Question3'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public numberYes=[];
  public numberNo=[];
  public barChartData = [
    {data: this.numberYes, label: 'Yes'},
    {data: this.numberNo, label: 'No'}
  ];
    getTitles(): void {
        this.httpClient.get<string[]>('http://localhost:8082/autoquestion/title')
            .subscribe(str => this.barChartLabels = str);
        //this.barChartLabels = this.titles;

    }
    getVoteNo(): void {
        this.httpClient.get<number[]>('http://localhost:8082/autoquestion/NumberVoteNo')
            .subscribe(str => this.numberNo = str);
        //this.barChartLabels = this.titles;

    }
    getVoteYes(): void {
        this.httpClient.get<number[]>('http://localhost:8082/autoquestion/NumberVoteYes')
            .subscribe(str => this.numberYes = str);
        //this.barChartLabels = this.titles;

    }
    ngOnInit() {
        this.getVoteNo();
        this.getVoteYes();
        this.getTitles();
    }
    getAll() {
        this.getTitles();
        //this.getListOfVoteNoCount();
        //this.getListOfVoteYesCount();
    }
}