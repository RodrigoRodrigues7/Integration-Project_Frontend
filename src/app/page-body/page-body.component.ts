import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/services/user.service';
import { UserDTO } from 'src/models/user.dto';

@Component({
  selector: 'app-page-body',
  templateUrl: './page-body.component.html',
  styleUrls: ['./page-body.component.css']
})
export class PageBodyComponent implements OnInit {

  usersList: UserDTO[];

  constructor(public userService: UserService) {
  }

  ngOnInit() {
    this.findUsers();
  }

  findUsers() {
    this.userService.findAll().subscribe(
      response => {
        this.usersList = response;
        //console.log(res);
      },
      error => { console.log(error); });
  }

}
