import {Component, Injectable, OnInit} from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'app-servers',
 // template : `
 //   <app-server></app-server>
 //   <app-server></app-server>`,
  templateUrl : './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server was created';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    },2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created!!';
  }
}


