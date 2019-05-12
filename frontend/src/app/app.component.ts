import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }

    changeUrl(url: string): void {
        this.router.navigateByUrl(url);
    }

}