import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Answer} from "../answer/answer.model";

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

    //data: any;

    messages: string[] = [];

    //private intervalSubscription: Unsubscribable;

    constructor(private httpClient: HttpClient)
    //private toaster: ToasterService)
    {
        //private questionService: QuestionService,

        // private autoQuestionService: AutoQuestionService,

        // private toaster: ToasterService){
    }

    //
    ngOnInit(): void {
        // this.userService.initUser();
        // this.intervalSubscription = interval(1000).subscribe(() => this.questionService.getLastQuestion());
        this.SortByLikes();
    }

    //
    sendMessage(message: string): void {
        this.httpClient.put('chat', message)
            .subscribe(() => this.SortByLikes()
                // () => this.toaster.pop('success', 'Message sended.')
            );
    }

    //
    //
    // print(): void{
    //     var element = document.getElementById('inform');
    //     element.style.display = "block";
    // }
    // back(): void{
    //     var element = document.getElementById('inform');
    //     element.style.display = "none";
    // }
    //
    //
    // ngOnDestroy(): void {
    //     if (this.intervalSubscription) {
    //         this.intervalSubscription.unsubscribe();
    //     }
    // }
    lastChatQuestionId(): Observable<number> {
        //chatlast
        /*this.httpClient.get< Number>('chat/chatlast').
          subscribe(data => return data);*/
        return this.httpClient.get<number>('chat/chatlast');
    }

    like(answer: Answer<any>): void {
        this.lastChatQuestionId().subscribe(data => {
            const params = new HttpParams().append('chatQuestionId', data.toString());
            this.httpClient.put('chat/like', null, {params})
                .subscribe(() => console.log('Good'));
        });
    }

    // SortByLikes(answer: Answer<any>): void {
    //     //const params = new HttpParams().append('chatQuestion', "fgd1");
    //     this.httpClient.get<string[]>('http://localhost:8082/chat/sortByLikes')
    //         .subscribe(str=>console.log(str[3]));
    //     // this.questionService.SortChatQuest();
    // }

    SortByLikes(): void {
        //const params = new HttpParams().append('chatQuestion', "fgd1");
        this.httpClient.get<string[]>('http://localhost:8082/chat/sortByLikes')
            .subscribe(str => this.messages = str);
        // return this.httpClient.get<string[]>('chat/sortByLikes');
        // // this.questionService.SortChatQuest();

    }


    // answer: Answer<any>

    // sendMessage(message: string): void {
    //     this.httpClient.put('chat', message)
    //         .subscribe(() => this.toaster.pop('success', 'Message sended.'));
    // }

}