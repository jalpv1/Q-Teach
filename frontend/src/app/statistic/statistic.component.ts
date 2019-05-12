import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

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
        this.loadData();
    }

    private loadData(): void {
        // TODO
        // this.httpClient.get<>('').subscribe(data => this.data );
    }

}
