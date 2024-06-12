import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {LakshIndexComponent} from "./mainpage/index/index.component";

export const routes: Routes = [
  {
    path: '',
    component: LakshIndexComponent
  }
];
