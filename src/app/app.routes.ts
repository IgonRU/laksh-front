import { Routes } from '@angular/router';
import { LakshHomepageComponent } from './home/homepage/homepage.component';
import { LakshAboutComponent } from './pages/about/about.component';
import { LakshServicesComponent } from './pages/services/services.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectPageComponent } from './projects/project-page/project-page.component';

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
    component: LakshServicesComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'project/:id',
    component: ProjectPageComponent
  }
];
