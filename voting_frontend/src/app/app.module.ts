import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'
import {AppComponent} from "./app.component";
import {FormsModule} from "@angular/forms";
import {InfoComponent} from "./info/info.component";
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from './main/main.component';
import {StatisticComponent} from './statistic/statistic.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {VideoComponent} from './video/video.component';
import {HttpClientModule} from "@angular/common/http";
import {
    MatButtonModule,
    MatCardModule, MatCheckboxModule, MatGridListModule,
    MatIconModule, MatInputModule, MatListModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule
} from "@angular/material";
import { ChartsModule } from 'ng2-charts';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';
import { AutoQuestionComponent } from './auto-question/auto-question.component';
import {AnswerComponent} from "./answer/answer.component";
import { DateFormatPipe } from './services/dateformatpipe';
import {QuestionComponent} from "./question/question.component";
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";

const appRoutes: Routes = [
    {path: '', redirectTo: 'main', pathMatch: 'full'},
    {path: 'main', component: MainComponent},
    {path: 'info', component: InfoComponent},
    {path: 'statistic', component: StatisticComponent},
    {path: 'auto', component: AutoQuestionComponent},
    {path: '**', component: PageNotFoundComponent}
];


@NgModule({
    imports: [BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        ChartsModule,
        BrowserAnimationsModule,
        MatCardModule, MatToolbarModule, MatSidenavModule, MatButtonModule,
        MatIconModule, MatSelectModule, MatInputModule, MatListModule, MatCheckboxModule, MatGridListModule
    ],
    declarations: [AppComponent,
        InfoComponent,
        MainComponent,
        StatisticComponent,
        PageNotFoundComponent,
        VideoComponent,
        MyBarChartComponent,
        AutoQuestionComponent,
        AnswerComponent,
        DateFormatPipe,
        QuestionComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}