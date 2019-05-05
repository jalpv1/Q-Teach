import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from './services/user.service';
import {interval, Unsubscribable} from 'rxjs';
import {QuestionService} from './services/question.service';
import {HttpClient} from '@angular/common/http';
import {ToasterService} from 'angular2-toaster';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit, OnDestroy {

  title = 'Voting Application';
  private intervalSubscription: Unsubscribable;
  information : string ="Підготовка до практики!\n" +
    "1) Встановити JDK\n" +
    "2) Встановити Jidea Ultimate!!! (https://www.jetbrains.com/idea/download/#section=windows)\n" +
    "3) Створити Spring Boot проект (https://www.youtube.com/watch?v=9isF4FK9AMg)\n" +
    " \n" +
    "Практика.\n" +
    "1) Робота в команді!\n" +
    "2) На практичних заняттях:\n" +
    "               - розбираємо архітектуру\n" +
    "               - вивчаємо нові потрібні інструменти.\n" +
    " \n" +
    "Завдання:\n" +
    "               Розширити проект який бачили на 1 лекції.\n" +
    "               Кожна команда має добавити нові можливості (Історія голосування, проходження тестів, .....)\n" +
    "               Функціонал в команд можуть повторюватися!\n" +
    "Завдання для практик \n" +
    "1) Ознайомитися з Spring, Spring Shell, DI.\n" +
    "   Створити трьох рівневу архітектуру: Simple Data Source (in memory) <- Domain (Бізнес логіка) <- Presentation.\n" +
    "   Продумати які нові можливості ви б хотіли реалізувати та реалізувати їх. \n" +
    "2) Заміняємо Prsentation Layer розробляємо  REST API (Spring Shell -> Spring MVC).\n" +
    "   Отримуємо проект (voter який бачили на лекції).\n" +
    "3) Заміняємо Data Source Layer підключаємо Spring Data (ORM). Добавляємо базу даних.\n" +
    "4) Створюємо WEB Client для REST API (Angular 2+).\n" +
    "5) Код ревю, ………….\n" +
    " \n" +
    " \n" +
    "Лекція 1\n" +
    "IOC, DI (https://www.youtube.com/watch?v=ZdBwF26oWhs)\n" +
    "Spring (https://www.youtube.com/watch?v=3wBteulZaAs&list=PL6jg6AGdCNaWF-sUH2QDudBRXo54zuN1t)\n" +
    " \n" +
    "Лекція 2\n" +
    "https://ru.wikipedia.org/wiki/REST\n" +
    "https://habr.com/ru/post/336816/\n" +
    " \n" +
    "Лекція 3\n" +
    "ORM\n" +
    "https://www.youtube.com/watch?v=H8ahIMSPQbI\n" +
    "Create simple project\n" +
    "https://www.youtube.com/watch?v=e792dmGXHro\n" +
    " \n" +
    "Migration tool\n" +
    "https://www.youtube.com/watch?v=FDDxDWUGvhs\n" +
    "https://www.youtube.com/watch?v=GP0smZCISI8\n" +
    " \n" +
    "Another DB tools\n" +
    "https://habr.com/ru/post/117974/\n" +
    "https://habr.com/ru/post/247885/\n" +
    " \n" +
    "Links:\n" +
    "https://www.youtube.com/watch?v=bkDUIIho70o\n" +
    " \n" +
    "Лекція 4\n" +
    "https://www.youtube.com/watch?v=_aJABfbm-UA\n" +
    "https://www.youtube.com/watch?v=t3KH5LXHi0s&list=PLqHlAwsJRxANlSuRSgldPWsbNkPqVBeFp\n" +
    "https://www.youtube.com/watch?v=cKod7WX0qUc&list=PLqHlAwsJRxANhhHlAlazVrbX69UMJ9Bcu\n" +
    "\n";

  constructor(private userService: UserService,
              private questionService: QuestionService,
              private httpClient: HttpClient,
              private toaster: ToasterService) {
  }

  ngOnInit(): void {
    this.userService.initUser();
    this.intervalSubscription = interval(1000).subscribe(() => this.questionService.getLastQuestion());
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
