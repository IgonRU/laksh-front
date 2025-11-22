import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IgonHttpConfig, IgonHttpErrorService, IgonHttpResponse, IgonHttpService } from '@igon/http';

@Injectable({
  providedIn: 'root'
})
export class LakshHomepageService extends IgonHttpService {
  constructor(
    httpConfig: IgonHttpConfig,
    http: HttpClient,
    httpError: IgonHttpErrorService
  ) {
    super(httpConfig, http, httpError, null);
  }

  getMainpage(): Observable<IgonHttpResponse> {
    return this.simpleGet('/mainpage');
  }

  getServicesStructure(): Observable<IgonHttpResponse> {
    return this.simpleGet('/services');
  }
}


