import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

// Добавляем переменную окружения в window для доступа из HTML
(window as any).ENVIRONMENT = environment;

console.log('Environment:', environment);

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
