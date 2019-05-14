import { Component, OnInit } from '@angular/core';
import {QuestionService} from '../services/question.service';
import {Label} from 'ng2-charts';

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
  listVoteYes: number[];
  listVoteNo: number[];
  listOfTitles: Label[];

  public barChartLabels: {data: Label[]} = {data: this.listOfTitles};
  constructor(private questionService: QuestionService) { }

  public barChartData = [];

  getAll() {
    this.getListOfTitles();
    this.getListOfVoteNoCount();
    this.getListOfVoteYesCount();
  }

  getListOfVoteYesCount() {
    this.questionService.getListOfvoteYesCount()
      .subscribe(list => { this.listVoteYes = list; this.barChartData = [{data: this.listVoteYes, label: 'Yes'},{data: this.listVoteNo, label: 'No'}];});
  }

  getListOfVoteNoCount() {
    this.questionService.getListOfvoteNoCount()
      .subscribe(list => { this.listVoteNo = list; this.barChartData = [{data: this.listVoteYes, label: 'Yes'},{data: this.listVoteNo, label: 'No'}];});
  }

  getListOfTitles(){
    this.questionService. getListOfTitles()
      .subscribe(list => { this.listOfTitles = list; this.barChartLabels = {data: this.listOfTitles}; })
  }

  ngOnInit() {
    this.listVoteYes = [];
    this.listVoteNo = [];
    this.listOfTitles=[];
    this.getListOfVoteYesCount();
    this.getListOfVoteNoCount();
    this.getListOfTitles();
  }

}
