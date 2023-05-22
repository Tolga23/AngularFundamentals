import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterStateService {

  counterSubject: BehaviorSubject <number> = new BehaviorSubject<number>(0);

  constructor() { }

  increase() {
    // next ile yeni değer gönderilir.
    this.counterSubject.next(this.counterSubject.value + 1);
  }

  decrease() {
    if(this.counterSubject.value > 0) {
      this.counterSubject.next(this.counterSubject.value - 1);
    }
  }

  incrementByValue(amount: number) {
    this.counterSubject.next(this.counterSubject.value + amount);
  }

  getCurrentValue() {
    return this.counterSubject.value;
  }

}
