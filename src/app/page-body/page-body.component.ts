import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/services/user.service';
import { NoteService } from 'src/services/note.service';
import { UserDTO } from 'src/models/user.dto';
import { NoteDTO } from 'src/models/note.dto';

@Component({
  selector: 'app-page-body',
  templateUrl: './page-body.component.html',
  styleUrls: ['./page-body.component.css']
})
export class PageBodyComponent implements OnInit {

  usersList: UserDTO[];
  notesList: NoteDTO[];

  constructor(public userService: UserService, public noteService: NoteService) {
  }

  ngOnInit() {
    this.findUsers();
    this.findNotes();
  }

  findUsers() {
    this.userService.findAll().subscribe(
      response => {
        this.usersList = response;
      },
      error => { console.log(error); });
  }

  findNotes() {
    this.noteService.findAll().subscribe(
      response => {
        this.notesList = response;
      },
      error => { console.log(error); });
  }

}
