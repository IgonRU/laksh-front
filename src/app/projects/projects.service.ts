import { Injectable } from '@angular/core';
import { IgonHttpConfig, IgonHttpErrorService, IgonHttpResponse, IgonHttpService } from '@igon/http';
import { Observable } from 'rxjs';
import { Project } from './project.interface';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LakshProjectsService extends IgonHttpService {
  private apiUrl = `${environment.apiUrl}/projects`;

  constructor(httpConfig: IgonHttpConfig,
    http: HttpClient,
    httpError: IgonHttpErrorService) {
    super(httpConfig, http, httpError, null);
  }

  getProjects(): Observable<IgonHttpResponse> {
    return this.simpleGet('/projects');
  }

}
