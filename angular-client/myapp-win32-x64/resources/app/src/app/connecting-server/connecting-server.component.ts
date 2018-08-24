import { Component, OnInit } from '@angular/core';

// import { HubConnection, HubConnectionBuilder } from '@aspnet/signalR';

// import { Message } from 'primeng/api';
// import { Router } from '../../node_modules/@angular/router';

@Component({
  selector: 'app-connecting-server',
  templateUrl: './connecting-server.component.html',
  styleUrls: ['./connecting-server.component.css']
})
export class ConnectingServerComponent implements OnInit {
  // private _hubConnection: HubConnection;
  // msgs: Message[] = [];
  // ip = 'localhost';
  constructor() { }

  ngOnInit(): void {
    
  }
  // OnSubmit()
  // {
  //   this._hubConnection =new HubConnectionBuilder().withUrl('http://'+ this.ip + ':5000/notify').build(); 
  //   this._hubConnection
  //     .start()
  //     .then(() => console.log('Connection started!'))
  //     .catch(err => console.log('Error while establishing connection :('));

  //   this._hubConnection.on('BroadcastMessage', (type: string, payload: string) => {
  //     this.msgs.push({ severity: type, summary: payload });
  //   });
  //   this.router.navigate(['./employees']);
  // }
}