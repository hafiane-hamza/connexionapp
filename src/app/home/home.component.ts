import { Component, OnInit } from '@angular/core';

import { User } from '../user';

@Component({templateUrl: 'home.component.html'})
export class HomeComponent implements OnInit {
  users: User[] = [];

  constructor( ) {

  }

  ngOnInit() { }
}
