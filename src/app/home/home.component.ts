import { Component, OnInit } from '@angular/core';
import { User, Role } from '../models/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user: User = new User({ _id: 'asdasd4qa4rawR', name: 'Daniyar', role: Role.admin });

  // constructor() {}

  ngOnInit(): void {
    console.log(this.user);
  }
}
