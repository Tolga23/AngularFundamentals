import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../admin-user-page/admin-user-page.component';

@Component({
  templateUrl: './user-card-page.component.html',
  styleUrls: ['./user-card-page.component.scss']
})
export class UserCardPageComponent implements OnInit{
  
  user!: User
  constructor(private routeService: ActivatedRoute) { }

  
  ngOnInit(): void {
    console.log('r-params', this.routeService.snapshot.params);
    this.user = this.routeService.snapshot.params as User;
  }
}
