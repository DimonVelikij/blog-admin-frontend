import { HttpEvent, HttpHandler, /*HttpHeaders, */HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { Inject } from "@angular/core";
import { API_URL_TOKEN } from "./config";

export class InterceptorService implements HttpInterceptor{

  public constructor(@Inject(API_URL_TOKEN) private apiUrl: string) {
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // const headers: HttpHeaders = req.headers.append('Content-Type', 'application/json');

    const jsonReq: HttpRequest<any> = req.clone({
      // headers,
      url: `${this.apiUrl}${req.url}`
    });

    return next.handle(jsonReq);
  }

}
