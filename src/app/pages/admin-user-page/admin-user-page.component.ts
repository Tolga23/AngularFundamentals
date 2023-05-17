import { Component, OnInit } from '@angular/core';

// DTO'dan gelen verileri tutmak için interface oluşturuyoruz.
export interface User {
  id: number;
  name?: string;
  surname?: string;
  username: string;
  email?: string;
}

@Component({
  templateUrl: './admin-user-page.component.html',
  styleUrls: ['./admin-user-page.component.scss']
})
export class AdminUserPageComponent implements OnInit {
  users: User[] = [
    {
      id: 1,
      name: "Tolga",
      surname: "Hardal",
      username: "tolgahardal",
    },
    {
      id: 2,
      name: "Lethal",
      surname: "Bizzle",
      username: "lethalbizzle",
    },
    {
      id: 3,
      name: "Tinchy",
      surname: "Stryder",
      username: "tinchystryder",
    }
  ];
  
  ngOnInit(): void {
    this.users.map((user) => {
      user.name = user.name?.toUpperCase();
      user.surname = user.surname?.toUpperCase();
      user.email = user.username + "@gmail.com";
    }
    );
  } 
}
