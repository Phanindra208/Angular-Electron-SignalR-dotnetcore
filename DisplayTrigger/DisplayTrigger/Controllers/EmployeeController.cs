using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DisplayTrigger.HubHelper;
using DisplayTrigger.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;

namespace DisplayTrigger.Controllers
{
    [Route("api/employee")]
    [ApiController]

    public class ValuesController : ControllerBase
    {
        private readonly IHubContext<ChatHub, IHub> _hubContext;

      public  ValuesController(IHubContext<ChatHub, IHub> hubContext)
        {
            _hubContext = hubContext;
        }
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
           
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] Employee employee)
        {
            _hubContext.Clients.All.PushEmployee(employee);
        }


        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
