import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from './services/user.service';
import {interval, Unsubscribable} from 'rxjs';
import {QuestionService} from './services/question.service';
import {AutoQuestionService} from './services/autoQuestion.service';

import {HttpClient} from '@angular/common/http';
import {ToasterService} from 'angular2-toaster';
import {_document} from "@angular/platform-browser/src/browser";

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
              private toaster: ToasterService,
             ) {
  }

  ngOnInit(): void {
    this.userService.initUser();
    this.intervalSubscription = interval(1000).subscribe(() => this.questionService.getLastQuestion());
  }

  getCount(): void {
    var str = this.autoQuestionService.count();
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

stat(): void{
    var info = document.getElementById("stat_info");
    info.style.display = "block";
}

stat_back(): void{
  var element = document.getElementById('stat_info');
  element.style.display = "none";
}

  getStat(autoquestionId: bigint): void {
    this.httpClient.get('autovote', autoquestionId)
      .subscribe(() => this.toaster.pop('success', 'Message sended.'));
  }

  ngOnDestroy(): void {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }

}
