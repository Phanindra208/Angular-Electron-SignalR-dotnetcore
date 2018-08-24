using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DisplayTrigger.Models
{
    public class Employee
    {
       public string EmployeeID { set; get; }
        public string EmployeeName { set; get; }
        public string EmployeeCompany{ set; get; }
        public string EmployeeTrade { set; get; }
        public string EmployeeDept { set; get; }

        //
        //  Movement=0 => in
        //  Movement=1=>  out
        //
        public int Movement { set; get; }
        public DateTime TimeStamp { set; get; }

    }
}
