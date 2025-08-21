import { Routes } from '@angular/router';
import { LakshHomepageComponent } from './home/homepage/homepage.component';
import { LakshAboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './services/services.component';

export const routes: Routes = [
  {
    path: '',
    component: LakshHomepageComponent 
  },
  {
    path: 'about',
    component: LakshAboutComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  }
];
