using DisplayTrigger.HubHelper;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DisplayTrigger.Models;
namespace DisplayTrigger
{
    public class ChatHub : Hub<IHub>
    {
      
        public override async Task OnConnectedAsync()
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, "SignalR Users");
            await base.OnConnectedAsync();
            this.Clients.All.PushEmployeesArray(new List<Employee> { new Employee { EmployeeID = "001", EmployeeName = "Phani", EmployeeCompany = "Astoria", EmployeeDept = "Technical", EmployeeTrade = "IT" ,TimeStamp=DateTime.Now}, new Employee { EmployeeID = "002", EmployeeName = "Shiva", EmployeeCompany = "Astoria", EmployeeDept = "Technical", EmployeeTrade = "R&D", TimeStamp = DateTime.Now }, new Employee { EmployeeID = "002", EmployeeName = "Joyce", EmployeeCompany = "Astoria", EmployeeDept = "Finance", EmployeeTrade = "HR", TimeStamp = DateTime.Now } });
        }

        public override async Task OnDisconnectedAsync(Exception exception)
        {
            await Groups.RemoveFromGroupAsync(Context.ConnectionId, "SignalR Users");
            await base.OnDisconnectedAsync(exception);
        }
    }
}
