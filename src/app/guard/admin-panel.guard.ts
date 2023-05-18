import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminPanelGuard {
  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    let userInfo!: any;

    // localStorage içerisinde userInfo bilgisine bakıyoruz, eğer varsa JSON olarak parse edip userInfo değişkenine atıyoruz.
    // userInfo değişkeni içerisinde roles bilgisi varsa ve içerisinde admin rolü varsa true döndürüyoruz.
    if (localStorage.getItem('userInfo') != undefined) {
      userInfo = JSON.parse(localStorage.getItem('userInfo') as any);

      if (userInfo.roles.includes('admin')) {
        return true;
      }

    }

    this.router.navigate(['login']);

    return false;
  }

}
