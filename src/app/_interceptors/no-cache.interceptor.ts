import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class NoCacheInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Проверяем, является ли запрос API запросом
    const isApiRequest = request.url.startsWith(environment.apiUrl) || 
                        request.url.includes('/api/');

    if (isApiRequest) {
      // Клонируем запрос с заголовками для отключения кеша
      const noCacheRequest = request.clone({
        setHeaders: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      });
      
      return next.handle(noCacheRequest);
    }

    return next.handle(request);
  }
}

