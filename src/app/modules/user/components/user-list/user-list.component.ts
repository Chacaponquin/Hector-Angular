import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'src/app/data/interfaces/user-card.metadata';
import data from '../../../../../assets/fake-data.json';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
})
export class UserListComponent implements OnInit {
  users: UserInterface[] = data;
  constructor() {}

  ngOnInit(): void {}
}
