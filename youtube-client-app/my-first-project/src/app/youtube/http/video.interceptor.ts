import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpParams,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiKey2 } from '../data/api/api-key';

export class VideoInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    let params = new HttpParams();
    params = params.append('key', apiKey2);

    const cloned = req.clone({
      params,
    });
    return next.handle(cloned);
  }
}
