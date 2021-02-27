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
  serverName= 'Test Server';
  serverCreated = false;
  servers = ['Test Server 1','Test Server 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    },2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName)
    this.serverCreationStatus = 'Server was created and name is : ' + this.serverName;
  }

  onUpdateServerName(event : Event){
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}


