import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry, take } from 'rxjs';
import { User } from '../pages/admin-user-page/admin-user-page.component';

// service olarak tanımlanmış ve component üzerinden constructor ile inject yapılabilir
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient
  ) { }

  // servis içerisinde subscribe yapılmaz, component içerisinde subscribe yapılır
  getUsers():Observable<User[]> {
    return this.httpClient.get<User[]>("https://jsonplaceholder.typicode.com/users" )
    .pipe(take(1),retry(3)); // Herhangi bir hata olasılığına karşı isteği 3 kere tekrarlar. Eğer ilk istekte gelirse tekrar etmez.
  }

  getUserById(id: number):Observable<User> {
    return this.httpClient.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
    .pipe(take(1),retry(3)); 
  }
 

}
