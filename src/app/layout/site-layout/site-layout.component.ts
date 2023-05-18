import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.scss']
})
export class SiteLayoutComponent implements OnInit {
  items!: MenuItem[];

  
  // component ilk çalıştığında yapılan işlemler, genelde apiden veri çekme işlemleri burada yapılır.
  ngOnInit(): void {
    let user!: any;
    if(localStorage.getItem('userInfo') != null) {
      user = JSON.parse(localStorage.getItem('userInfo') as any );
    }

    this.items = [ {
      label: user?.name || 'Oturum Aç',
      icon: 'pi pi-fw pi-user',
      command: () => {
        if(user) {
          console.log('user: ', user);
        }
        else {
          window.location.href = '/login';
        }        
      }
    },
      {
        label: 'Home',
        routerLink: '/',
        icon: 'pi pi-fw pi-home',

      },
      {
        label: 'About',
        routerLink: '/about',
        icon: 'pi pi-fw pi-info-circle',
        items: [
          {
            label: 'Vision',
            routerLink: '#',
            icon: 'pi pi-fw pi-eye'
      },
          {
            label: 'Mission',
            routerLink: '#',
            icon: 'pi pi-fw pi-briefcase'
      },
    ],
      },
      {
        label: 'Contact',
        routerLink: '/contact',
        icon: 'pi pi-fw pi-phone',
      },
      {
        label: 'Admin',
        routerLink: '/admin',
        icon: 'pi pi-fw pi-user',
      },{
        label: 'Reactive Programming',
        routerLink: '/rxjs',
        icon: 'pi pi-fw pi-chart-line',
      },
      {
        label: 'Pipes',
        routerLink: '/pipes',
        icon: 'pi pi-fw pi-filter',
      },
      {
        label: 'Login',
        routerLink: '/login',
        icon: 'pi pi-fw pi-sign-in',
      },
      {
        label: 'Logout',
        command: () => {
         const result = confirm('Are you sure?');
          if(result) {
            localStorage.clear();
            window.location.reload();
          }
        },
        icon: 'pi pi-fw pi-sign-out',
      },
    ];
  }
 


}
