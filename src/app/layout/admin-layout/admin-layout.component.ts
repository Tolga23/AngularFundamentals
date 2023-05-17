import { Component, OnInit } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
  items!: MegaMenuItem[];

  ngOnInit(): void {

    this.items = [ {
      label: 'HomePage',
      icon: 'pi pi-fw pi-home',
      routerLink: '',
    },
      {
        label: 'Users',
        icon: 'pi pi-fw pi-users',
        items: [
          [
            {
              label: 'User',
              items: [
                {
                  label: 'Add',
                  routerLink: 'users/add', // 'users/add' => /admin/users/add
                },
                {
                  label: 'User List',
                  routerLink: 'users', // 'users/list' => /admin/users
                }
              ]

            },
            {
              label: 'Role',
              items: [
                {
                  label: 'Roles List',
                  routerLink: 'roles', // 'roles' => /admin/roles
                }
              ]
            },
            {
              label: 'Permission',
              items: [
                {
                  label: 'Person Permissions',
                  routerLink: 'person-permission', // admin/person-permission
                },
                {
                  label: 'Role Permission',
                  routerLink: 'role-permission',  // admin/role-permission
                }
              ]
            }
          ]
        ],
      }
    ];
  }

}