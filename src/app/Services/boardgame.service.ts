import { Injectable } from '@angular/core';
import { Game } from '../Models/game';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({ providedIn: 'root'})

export class BoardgameService {

  constructor(
    private http: HttpClient
  )  { }
}
