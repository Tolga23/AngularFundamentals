import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // property binding
  title = 'AngularFoundementals'; // default olarak public olarak tanımlanır ve html tarafında kullanılabilir.


  // event binding
  click() {
    this.title = "Angular"; // this ile class içindeki değişkenlere erişebiliriz.
  }


}
