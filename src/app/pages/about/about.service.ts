import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IgonHttpConfig, IgonHttpErrorService, IgonHttpResponse, IgonHttpService } from '@igon/http';

@Injectable({
  providedIn: 'root'
})
export class LakshAboutService extends IgonHttpService {
  constructor(
    httpConfig: IgonHttpConfig,
    http: HttpClient,
    httpError: IgonHttpErrorService
  ) {
    super(httpConfig, http, httpError, null);
  }

  getAboutPage(): Observable<IgonHttpResponse> {
    return this.simpleGet('/about');
  }
}

