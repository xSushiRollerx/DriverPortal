import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  sidenavWidth = 4;

  constructor() {

  }

  ngOnInit() {

  }

  login() {
    localStorage.setItem('username','driver1');
  }

  logout() {
    localStorage.removeItem('username');
  }

  increase() {
    this.sidenavWidth = 20;
  }
  decrease() {
    this.sidenavWidth = 4;
  }

}