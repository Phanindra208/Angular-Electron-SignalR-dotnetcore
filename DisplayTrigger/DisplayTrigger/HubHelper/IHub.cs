using DisplayTrigger.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DisplayTrigger.HubHelper
{
    public interface IHub
    {
        Task PushEmployee(Employee employee);

        Task PushEmployeesArray(List<Employee> employee);
    }
}
