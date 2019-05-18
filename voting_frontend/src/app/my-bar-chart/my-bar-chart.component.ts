import { Component, OnInit } from '@angular/core';
import {AutoQuestionService} from "../services/auto-question.service";
@Component({
  selector: 'app-my-bar-chart',
  templateUrl: './my-bar-chart.component.html',
  styleUrls: ['./my-bar-chart.component.scss']
})
export class MyBarChartComponent implements OnInit {

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartType = 'bar';
  public barChartLegend = true;

  listVoteYes: number[] = [];
  listVoteNo: number[] = [];
  listOfTitles: string[] = [];

  public barChartLabels = ['Question1', 'Question2', 'Question3'];
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


  constructor(private questionService: AutoQuestionService) {
  }


  getAll() {
    this.getListOfTitles();
    this.getListOfVoteNoCount();
    this.getListOfVoteYesCount();
  }

  getListOfVoteYesCount() {
    return this.questionService.getListOfvoteYesCount();
  }

  getListOfVoteNoCount() {
    return this.questionService.getListOfvoteNoCount();
  }

  getListOfTitles(){
      return this.questionService.getListOfTitles();
  }
  ngOnInit() {
    this.getListOfVoteYesCount();
    this.getListOfVoteNoCount();
    this.getListOfTitles();
  }

  }