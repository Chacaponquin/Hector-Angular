import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserInterface } from 'src/app/data/interfaces/user-card.metadata';
import data from '../../../../../assets/fake-data.json';

@Component({
  selector: 'app-user-selected',
  templateUrl: './user-selected.component.html',
  styleUrls: ['./user-selected.component.css'],
})
export class UserSelectedComponent implements OnInit {
  userFound: UserInterface;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.userFound = data.find(
      (user: UserInterface) =>
        user.id === Number(this.route.snapshot.params['id'])
    );

    this.route.params.subscribe((params: Params) => {
      this.userFound = data.find(
        (user: UserInterface) => user.id === Number(params['id'])
      );
    });
  }
}
