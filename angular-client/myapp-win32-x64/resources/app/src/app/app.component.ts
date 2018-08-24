import { Component, OnInit } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalR';

import { Message } from 'primeng/api';
import { Router } from '../../node_modules/@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private _hubConnection: HubConnection;
  msgs: Message[] = [];
  ip = 'localhost';
  isVisible = true;
  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.ip);
    // this._hubConnection =new HubConnectionBuilder().withUrl('http://localhost:1875/notify').build(); 
    // this._hubConnection
    //   .start()
    //   .then(() => console.log('Connection started!'))
    //   .catch(err => console.log('Error while establishing connection :('));

    // this._hubConnection.on('BroadcastMessage', (type: string, payload: string) => {
    //   this.msgs.push({ severity: type, summary: payload });
    // });
    
    // this.router.navigate(['./employees']);
    this.router.navigate(['./employees']);
  }
  OnSubmit()
  {
    console.log(this.ip);
    this.isVisible = false;
    // this._hubConnection =new HubConnectionBuilder().withUrl('http://localhost:1875/notify').build(); 
    // this._hubConnection
    //   .start()
    //   .then(() => console.log('Connection started!'))
    //   .catch(err => console.log('Error while establishing connection :('));

    // this._hubConnection.on('BroadcastMessage', (type: string, payload: string) => {
    //   this.msgs.push({ severity: type, summary: payload });
    // });
    // this.isVisible = false;
    
  }
}
