import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { API_CONFIG } from 'src/config/api.config';
import { NoteDTO } from 'src/models/note.dto';

@Injectable()
export class NoteService {

   constructor(public http: HttpClient) {
   }

   findAll() : Observable<NoteDTO[]> {
      return this.http.get<NoteDTO[]>(`${API_CONFIG.baseUrl}/notes`);
   }

}