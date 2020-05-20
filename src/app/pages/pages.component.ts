import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MENU_ITEMS } from './pages-menu';
import { locateHostElement } from '@angular/core/src/render3/instructions';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class PagesComponent implements OnInit{

  constructor(private router: Router){

  }
  menu = MENU_ITEMS;

  ngOnInit(){
    this.checkLoginStatus();
  }
  checkLoginStatus(){
    if(localStorage.getItem('angaza_admin_token') == null || localStorage.getItem('angaza_admin_token') == "" ){
      this.router.navigateByUrl('/auth');
    }else{
      this.router.navigateByUrl('/pages');
    }
  }
}
