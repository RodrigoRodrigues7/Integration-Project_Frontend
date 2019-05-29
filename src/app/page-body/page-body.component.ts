import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-page-body',
  templateUrl: './page-body.component.html',
  styleUrls: ['./page-body.component.css']
})
export class PageBodyComponent implements OnInit {

  constructor(public userService: UserService) {
  }

  ngOnInit() {
    this.userService.findAll().subscribe(
      res => { console.log(res);
      },
      error => { console.log(error);
      });
  }

}
