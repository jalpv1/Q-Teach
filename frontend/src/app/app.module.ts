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
// import {MaterialModule} from "@angular/material";


const appRoutes: Routes = [
    {path: '', redirectTo: 'main', pathMatch: 'full'},
    {path: 'main', component: MainComponent},
    {path: 'info', component: InfoComponent},
    {path: 'statistic', component: StatisticComponent},
    {path: '**', component: PageNotFoundComponent}
];


@NgModule({
    imports: [  BrowserModule,
                FormsModule,
                HttpClientModule,
                RouterModule.forRoot(appRoutes),
                // MaterialModule.forRoot()
                ],
    declarations: [AppComponent,
        InfoComponent,
        MainComponent,
        StatisticComponent,
        PageNotFoundComponent,
        VideoComponent],
    bootstrap: [AppComponent]
})
export class AppModule {

}