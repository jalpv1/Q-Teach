import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { QuestionComponent } from './question/question.component';
import { autoQuestionComponent } from './autoQuestion/autoQuestion.component';
import { DateFormatPipe } from './services/dateformatpipe';
import { AnswerComponent } from './answer/answer.component';
import {ToasterModule, ToasterService} from 'angular2-toaster';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import {ButtonInfoComponent} from './buttonInfo/button.component';


@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    autoQuestionComponent,
    DateFormatPipe,
    AnswerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToasterModule.forRoot(),
  ],
  providers: [ToasterService,DateFormatPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
