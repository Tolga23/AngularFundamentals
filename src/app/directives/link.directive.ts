import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[link]'
})
export class LinkDirective {

  // elementlere erişip değişiklik yapmaya olanak sağlar. 
  // ElementRef ile elementlere erişebiliriz. 
  constructor(private ef: ElementRef, private renderer: Renderer2) {
    const htmlElemenet = (this.ef.nativeElement as HTMLElement);
    htmlElemenet.style.color = "blue";
    htmlElemenet.style.padding = "5px";
    htmlElemenet.style.cursor = "pointer";
    htmlElemenet.style.textDecoration = "underline";

  }

  @HostListener("mouseover", ["$event"])
  onMouseOver(event: MouseEvent) {
    this.renderer.setStyle(this.ef.nativeElement, "color", "red");
  }

  @HostListener("mouseout", ["$event"])
  onMouseOut(event: MouseEvent) {
    this.renderer.setStyle(this.ef.nativeElement, "color", "blue");
  }

}
