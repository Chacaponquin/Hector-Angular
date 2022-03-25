import { Component, Input, OnInit } from '@angular/core';
import { UserInterface } from '../../../../data/interfaces/user-card.metadata';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent implements OnInit {
  @Input() user: UserInterface;
  constructor() {}

  ngOnInit(): void {}
}
