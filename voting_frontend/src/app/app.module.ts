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
import { ChartsModule } from 'ng2-charts';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({

  declarations: [
    AppComponent,
    QuestionComponent,
    autoQuestionComponent,
    DateFormatPipe,
    AnswerComponent,
    MyBarChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToasterModule.forRoot(),
    AppRoutingModule,
    ChartsModule
  ],
  providers: [ToasterService,DateFormatPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
