import { Component, OnInit, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Game } from '../../Models/game'; 

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent  {
  public games: Game[];


    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        http.get(baseUrl + 'api/Games').subscribe(result => {
            this.games = result.json() as Game[];
        }, error => console.error(error));
    }
}

