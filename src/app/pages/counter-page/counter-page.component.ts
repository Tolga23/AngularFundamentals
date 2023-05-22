import { Component } from '@angular/core';
import { CounterStateService } from 'src/app/rxjsSubjects/counter-state.service';

@Component({
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.scss']
})
export class CounterPageComponent {
  msg: string = "";
  isActive: boolean = false;
  counter: number = 0;

  
  constructor(private counterState: CounterStateService) {
    // subscribe ile counterSubject içerisindeki değerler dinlenir. 
    this.counterState.counterSubject.subscribe((value) => {
      this.counter = value;
    });
  }
  
  onDecrement() {
    this.counterState.decrease();
  }
  onIncrement() {
    this.counterState.increase();
  }
  
  onModalChange(event: number) {
    this.counterState.incrementByValue(Number(event));
  }
}
