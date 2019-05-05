import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {interval} from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  messages: string[] = [];

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    interval(1000)
      .subscribe(() => this.loadMessages());
  }

  private loadMessages(): void {
    this.httpClient.get<string[]>('chat')
      .subscribe(m => this.messages = m);
  }

  sendMessage(message: string): void {
    this.httpClient.put('chat', message)
      .subscribe(() => this.messages.push(message));
  }

}
