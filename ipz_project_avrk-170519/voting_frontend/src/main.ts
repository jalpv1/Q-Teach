import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from "./app/app.module";
// import {InfoComponent} from "./app/info/info.component";


const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);