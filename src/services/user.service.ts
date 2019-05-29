import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { API_CONFIG } from 'src/config/api.config';
import { UserDTO } from 'src/models/user.dto';

@Injectable()
export class UserService {

   constructor(public http: HttpClient) {
   }

   findAll() : Observable<UserDTO[]> {
      return this.http.get<UserDTO[]>(`${API_CONFIG.baseUrl}/users`);
   }

}