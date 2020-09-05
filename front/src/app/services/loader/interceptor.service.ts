import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import {delay} from 'rxjs/operators'
import {finalize} from "rxjs/operators";
import {LoaderService} from "../loader/loader.service";


@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private loaderService:LoaderService){
   // console.log(loaderService);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {

   this.loaderService.show();
   
   return next.handle(req).pipe(
     delay(300),
     finalize( () => this.loaderService.hide())
   );
  }
}
