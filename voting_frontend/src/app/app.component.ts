import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from './services/user.service';
import {interval, Unsubscribable} from 'rxjs';
import {QuestionService} from './services/question.service';
import {AutoQuestionService} from './services/autoQuestion.service';

import {HttpClient} from '@angular/common/http';
import {ToasterService} from 'angular2-toaster';
import {AutoQuestion} from "./autoQuestion/autoQuestion.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit, OnDestroy {

  title = 'Voting Application';
  private intervalSubscription: Unsubscribable;



  constructor(private userService: UserService,
              private questionService: QuestionService,
              private autoQuestionService: AutoQuestionService,
              private httpClient: HttpClient,
              private toaster: ToasterService) {
  }

  ngOnInit(): void {
    this.userService.initUser();
    this.intervalSubscription = interval(1000).subscribe(() => this.questionService.getLastQuestion());
   // this.intervalSubscription = interval(1000).subscribe(() => this.autoQuestionService.getLastAutoQuestion();
  }

  sendMessage(message: string): void {
    this.httpClient.put('chat', message)
      .subscribe(() => this.toaster.pop('success', 'Message sended.'));
  }
  print(): void{
    var element = document.getElementById('inform');
    element.style.display = "block";
  }
  back(): void{
    var element = document.getElementById('inform');
    element.style.display = "none";
  }


  ngOnDestroy(): void {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }

}
