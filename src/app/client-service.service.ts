import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Client } from './model/client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  constructor(private _http: HttpClient) { }

  getClients(): Observable<Client[]> {
    console.log("send request")
    return this._http.get<Client[]>("/assets/clients.json");
  }
}
