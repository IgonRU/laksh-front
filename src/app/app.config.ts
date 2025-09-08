import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { IgonHttpConfig, IgonHttpErrorService } from '@igon/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { routes } from './app.routes';
import { provideClientHydration, withI18nSupport } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NoCacheInterceptor } from './_interceptors/no-cache.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideAnimations(),
    provideClientHydration(withI18nSupport()),
    provideHttpClient(
      withInterceptorsFromDi()
    ),
    {
      provide: IgonHttpConfig,
      useValue: new IgonHttpConfig({
        hostName: environment.apiUrl,
        debugMode: !environment.production,
      }),
    },
    IgonHttpErrorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NoCacheInterceptor,
      multi: true
    }
  ]
};
