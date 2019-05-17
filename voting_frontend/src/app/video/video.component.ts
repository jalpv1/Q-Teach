import {Component, Input} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
    selector: 'app-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.scss']
})
export class VideoComponent {

    @Input()
    src: string;
    @Input()
    width = 400;
    @Input()
    height = 400;

    constructor(public sanitizer: DomSanitizer){}

}
