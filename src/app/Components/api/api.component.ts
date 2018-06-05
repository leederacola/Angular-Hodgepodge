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


    constructor() {
       
    }
}

