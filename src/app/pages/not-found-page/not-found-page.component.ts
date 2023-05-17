import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss']
})
export class NotFoundPageComponent {

  // ts tarafında navigate işlemini yapabilmek için routerService ile yaparız.
  constructor(private routerService: Router) { }

  click() {
    const confirm = window.confirm("Are you sure?");
    if (confirm) {
      this.routerService.navigate(["/"]);
    }
  }
}
