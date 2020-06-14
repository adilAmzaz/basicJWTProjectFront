import { Component, OnInit } from '@angular/core';
import { UserModule } from 'src/app/models/user/user.module';
import { HttpClient } from '@angular/common/http';
import { GlobalConfig } from 'src/app/global-config';
import { UserHttpService } from 'src/app/user/user-http.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  listUsers : UserModule[] = [];
  constructor(private _userService : UserHttpService) { }

  ngOnInit(): void {
    this._userService.getAllUsers().subscribe(
      users => {
        this.listUsers = users;
        console.log(this.listUsers);
        console.log(this.listUsers[0].roles[0])
      }
    )
  }

}
