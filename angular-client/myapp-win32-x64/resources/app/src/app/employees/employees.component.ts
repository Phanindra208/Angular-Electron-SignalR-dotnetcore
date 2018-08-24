import {Component, OnInit, ViewChild} from '@angular/core';
import { Employee } from '../emp-details';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalR';



@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  private _hubConnection: HubConnection;
  lstEmps: Employee[];
  displayedColumns = ['EmployeeID', 'EmployeeName', 'EmployeeCompany','EmployeeTrade'];
  dataSource = new MatTableDataSource<Employee>(this.lstEmps);
  Count:number=0;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor() { }

  ngOnInit() {
   
    this._hubConnection =new HubConnectionBuilder().withUrl('http://localhost:3000/EmployeeHub').build(); 
    this._hubConnection
      .start()
      .then(() => console.log('Connection started!'))
      .catch(() => console.log('Error while establishing connection :('));

    this._hubConnection.on('PushEmployeesArray', (Data: Employee[]) => {
     this.lstEmps=Data;
     console.log(this.lstEmps.length);
     this.dataSource = new MatTableDataSource(this.lstEmps);
    });
    this._hubConnection.on('PushEmployee', (Data: Employee) => {
      if(Data.movement==0)
      this.lstEmps.push(Data);
      else
      {
       var Emp= this.lstEmps.find(i=>i.employeeID==Data.employeeID)
       console.log(Emp);
       if(Emp!=null)
       this.lstEmps.splice(this.lstEmps.indexOf(Emp), 1);
      }
      console.log(this.lstEmps.length);
      this.dataSource = new MatTableDataSource(this.lstEmps);
     });
    this._hubConnection.onclose(function() {
      console.log('closed');
      this.lstEmps=[];
      setTimeout(function() {
        this._hubConnection.start();
      }, 5000); // Restart connection after 5 seconds.
   });
   
    this.dataSource.paginator = this.paginator;
  }
  OnSubmit()
  {

  }

}
