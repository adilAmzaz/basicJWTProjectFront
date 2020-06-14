import { Component, OnInit } from '@angular/core';
import { UserModule } from 'src/app/models/user/user.module';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  listUsers : UserModule[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
