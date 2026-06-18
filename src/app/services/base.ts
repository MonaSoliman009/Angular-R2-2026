import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Base {
  isLoading:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(true)

  showLoader(){
    this.isLoading.next(true)
  }

  hideLoader(){
    this.isLoading.next(false)
  }
}
