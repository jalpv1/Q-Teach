import { Component, OnInit } from '@angular/core';
import {AutoQuestionService} from "../services/auto-question.service";
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-my-bar-chart',
  templateUrl: './my-bar-chart.component.html',
  styleUrls: ['./my-bar-chart.component.scss']
})
export class MyBarChartComponent implements OnInit {

  constructor(private httpClient: HttpClient) {}

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartType = 'bar';
  public barChartLegend = true;

  listVoteYes: number[] = [];
  listVoteNo: number[] = [];
  titles:string[] = [];

  public barChartLabels = [];
  //public barChartLabels = this.getListOfTitles();

  public barChartData = [
    {data: [65, 59, 80], label: 'Yes'},
    {data: [28, 48, 40], label: 'No'}
  ];


  /*public barChartData =[
    {data:this.getListOfVoteYesCount(), label: 'Yes'},
    {data:this.getListOfVoteNoCount(), label: 'No'}
  ]*/


   //public barChartLabels: {data: Label[]} = {data: this.listOfTitles};


  //constructor(private questionService: AutoQuestionService) {}


  getAll() {
    this.getTitles();
    //this.getListOfVoteNoCount();
    //this.getListOfVoteYesCount();
  }

  /*getListOfVoteYesCount() {
    return this.questionService.getListOfvoteYesCount();
  }*/

  /*getListOfVoteNoCount() {
    return this.questionService.getListOfvoteNoCount();
  }*/

  getTitles(): void {
    this.httpClient.get<string[]>('http://localhost:8082/autoquestion/title')
        .subscribe(str => this.barChartLabels = str);
    //this.barChartLabels = this.titles;

  }
  ngOnInit() {
    //this.getListOfVoteYesCount();
    //this.getListOfVoteNoCount();
    this.getTitles();
  }

  }