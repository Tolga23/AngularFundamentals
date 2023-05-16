import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-block-button',
  templateUrl: './block-button.component.html',
  styleUrls: ['./block-button.component.scss']
})
export class BlockButtonComponent {
  @Input() text: string | undefined = "";
  @Input() color: string = "";
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();
  // EventEmitter tipi ile bir event oluşturulur. 

  // <block-button color="red" text="btn1" (onClick)="click($event)" ></block-button>
  // <block-button color="blue" text="btn2"></block-button>

  click() {
    this.onClick.emit(); // emit ile event tetiklenir.
  }

}
