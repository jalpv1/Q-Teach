import {Component} from '@angular/core';

@Component({
    selector: 'app-info',
    templateUrl: './info.component.html',
    styleUrls: ['./info.component.scss']
})
export class InfoComponent {

    videos: string[] = ['https://www.youtube.com/embed/9isF4FK9AMg',
                        'https://www.youtube.com/embed/ZdBwF26oWhs',
                        'https://www.youtube.com/embed/3wBteulZaAs',
                        'https://www.youtube.com/embed/H8ahIMSPQbI',
                        'https://www.youtube.com/embed/e792dmGXHro',
                        'https://www.youtube.com/embed/FDDxDWUGvhs',
                        'https://www.youtube.com/embed/bkDUIIho70o',
                        'https://www.youtube.com/embed/_aJABfbm-UA',
                        'https://www.youtube.com/embed/t3KH5LXHi0s?list=PLqHlAwsJRxANlSuRSgldPWsbNkPqVBeFp'
    ];

}