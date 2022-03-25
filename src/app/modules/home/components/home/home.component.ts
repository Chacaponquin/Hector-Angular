import { Component, OnInit } from '@angular/core';
import { HomeCardInterface } from 'src/app/data/interfaces/home-card.metadata';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  homeCards: HomeCardInterface[] = [
    {
      image: '../../../assets/images/all-users.png',
      label: 'All Users',
      route: '/users',
    },
    {
      image: '../../../assets/images/create-user.png',
      label: 'Create User',
      route: '/createUser',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
