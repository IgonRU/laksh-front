import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IgonHttpConfig, IgonHttpErrorService, IgonHttpResponse, IgonHttpService } from '@igon/http';
import { environment } from '../../../environments/environment';

export interface FeedbackPayload {
  name: string;
  request: string;
  phone?: string;
}

@Injectable({ providedIn: 'root' })
export class FeedbackFormService extends IgonHttpService {
  private readonly base = environment.apiUrl;

  constructor(
    httpConfig: IgonHttpConfig,
    http: HttpClient,
    httpError: IgonHttpErrorService
  ) {
    super(httpConfig, http, httpError, null);
  }

  submitFeedback(payload: FeedbackPayload): Observable<IgonHttpResponse> {
    return this.simplePost('/feedback', {data: {...payload}});
  }
}


