import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

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
