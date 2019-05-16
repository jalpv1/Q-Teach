import {Component, OnInit} from '@angular/core';
import {QuestionService} from '../services/question.service';
import {Label} from 'ng2-charts';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-my-bar-chart',
  templateUrl: './my-bar-chart.component.html',
  styleUrls: ['./my-bar-chart.component.css']
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
  listOfTitles: string[];

  public barChartLabels = ['2006', '2007', '2008'];

  // public barChartLabels: {data: Label[]} = {data: this.listOfTitles};
  constructor(private questionService: QuestionService) {
  }

  public barChartData = [];

  getAll() {
    this.getListOfTitles();
    this.getListOfVoteNoCount();
    this.getListOfVoteYesCount();
  }

  getListOfVoteYesCount() {
    this.questionService.getListOfvoteYesCount().subscribe(list => this.listVoteYes = list);
  }

  getListOfVoteNoCount() {
    this.questionService.getListOfvoteNoCount().subscribe(list => this.listVoteNo = list);
  }

  getListOfTitles(){
    this.questionService.getListOfTitles()
      .subscribe(list => this.listOfTitles = list);
  }

  ngOnInit() {
    this.listOfTitles=[];
    this.getListOfVoteYesCount();
    this.getListOfVoteNoCount();
    this.getListOfTitles();
  }

}
