import { Component } from '@angular/core';
import { SelectorType } from 'src/app/components/selector/selector.component';

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  btnColor: string = "red";
  
  cities: any[] = [{
    id: 1,
    name: "Eskişehir",
    code: "26",
    selected: false
  },
  {
    id: 2,
    name: "Ankara",
    code: "06",
    selected: false
  },
  {
    id: 3,
    name: "İstanbul",
    code: "34",
    selected:false
  }
];

cityMaps = this.cities.map( (item: any) => {
  return {
    displayValue: item.code,
    displayText: item.name,
    selected: item.selected
  } as SelectorType; // Type casting 
});

visible: boolean = false;

showHide() {
  this.visible = !this.visible;
}

btnClick() {
  alert("btn clicked");
}

selectedCity!: string;

onCitySelect($event: any) {
  this.selectedCity = $event;
}

}
