import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface SelectorType {
  displayValue: string | number;
  displayText: string;
  selected?: boolean; // optional property (not required)
}

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent {
  public selectedValue!: string;

  @Input() dataSource!: SelectorType[];
 // @Input() dataSource: SelectorType | undefined; //yukarıdaki ile aynı anlamda

 @Output() onSelect: EventEmitter<string> = new EventEmitter<string>();
  

 select(event: any) {
    this.selectedValue = event.target.value;
    const objs: any = this.dataSource.filter((item) => item.displayValue != this.selectedValue);

    objs.map((item: any) => {
      item.selected = false; // Daha önceden seçilmiş olanları false yapıyoruz.
    });

    // dataSoruce kendini güncellesin diye yeniden güncel array'i atıyoruz.
    this.dataSource = [...this.dataSource];

    this.onSelect.emit(event.target.value); // Seçilen değeri dışarıya gönderiyoruz.
 }

/*  data: SelectorType = {
    displayValue: 26,
    displayText: "Eskişehir"
  };
*/

}
