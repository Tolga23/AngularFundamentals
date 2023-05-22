import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CounterStateService } from 'src/app/rxjsSubjects/counter-state.service';

@Component({
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit, OnDestroy {

  // ActivatedRoute servisi => Router ile ilgili bilgileri almak için kullanılır.
  // Servisler genelde constructor içerisinde inject edilir. private olarak tanımlanır.
  constructor(
    private routerService: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta,
    public counterState: CounterStateService) {
    console.log("AboutPageComponent constructor çalıştı");

    console.log("routerService" + this.routerService);
  }

  counter = 0;
  timer = setInterval(() => {
    this.counter++;
    console.log("AboutPageComponent timer çalıştı " + this.counter);
  }, 1000);

  // Angular companent lifecycle Hooks
  ngOnDestroy(): void {
    console.log("AboutPageComponent ngOnDestroy DOM'dan ayrıldı");
    clearInterval(this.timer);
  }

  ngOnInit(): void {
    console.log("AboutPageComponent ngOnInit DOM'a yerleşti");

    const title = (this.routerService.snapshot.data as any).title;
    this.titleService.setTitle(title);
    this.metaService.addTag({ name: "page", content: "About Page" });
  }

}
