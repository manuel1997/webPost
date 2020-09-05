import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class LoaderService {

   isLoading = new Subject<boolean>();

  show() {
    this.isLoading.next(true);
  }

  hide() {
    this.isLoading.next(false);
  }

}
