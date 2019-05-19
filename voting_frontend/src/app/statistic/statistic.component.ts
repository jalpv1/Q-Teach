import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {interval} from "rxjs";
//import {Router} from "@angular/router";

@Component({
    selector: 'app-statistic',
    templateUrl: './statistic.component.html',
    styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {

    data: any;

    constructor(private httpClient: HttpClient) {
    }

    ngOnInit(): void {
        //this.loadData();
        //interval(1000)
        //    .subscribe(()=> this.(new Date()))
        interval(1000)
            this.loadData();
    }

    private loadData(): void {
        // TODO
        // this.httpClient.get<>('').subscribe(data => this.data );
        //this.router.navigateByUrl(url);

    }

}
