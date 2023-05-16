import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockButtonComponent } from './block-button/block-button.component';
import { SelectorComponent } from './selector/selector.component';



@NgModule({
  declarations: [BlockButtonComponent,SelectorComponent], // Componenetlerimizi burada tanımlıyoruz.
  imports: [
    CommonModule 
  ],
  exports: [BlockButtonComponent,SelectorComponent] // Başka modüllerde kullanabilmek için export ediyoruz.
})
export class UniModule { }
