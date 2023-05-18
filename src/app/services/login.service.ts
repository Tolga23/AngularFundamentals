import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, take, tap } from 'rxjs';

export interface LoginModel {
  email: string;
  password: string;
}


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private httpClient: HttpClient) { }

  login(model:LoginModel){
    return this.httpClient
    .post<LoginModel>("https://reqres.in/api/login", model)
    .pipe(
      take(1),
      tap((result) => {
        console.log("LoginService.login() result: ", result);
      }),
      retry(3)
    );
  }
}
