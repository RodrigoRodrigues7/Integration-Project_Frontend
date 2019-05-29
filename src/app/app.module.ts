import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PageBodyComponent } from './page-body/page-body.component';

import { UserService } from 'src/services/user.service';
import { NoteService } from 'src/services/note.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageBodyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    NoteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
