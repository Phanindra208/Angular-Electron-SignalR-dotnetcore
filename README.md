# Angular-Electron-SignalR-dotnetcore
 # Tooling 
 **NodeJS**
 **VSCode**
**Visual Studio**

Angular Commands 
Set-Up

`npm install -g @angular/cli`

`npm Install` 
## Run 
### Web mode 
`npm  run start` 

### Electron Mode 
`npm run electron-build` 

### Release 
`npm run release`
## Integration 
---

#### Endpoint
``` http
POST http://localhost:3000/api/employee
```

#### Request body
| Param | Type | Remarks |
| --- | --- | --- |
| EmployeeID | string |  |
| EmployeeName | integer | |
| EmployeeCompany | datetime|  |
| EmployeeTrade | integer | Tracker's id  |
| Movement | integer | 0=>in 1=>out  |
| TimeStamp | datetime |   |
```json
{
"EmployeeID":"100",
"EmployeeName":"James",
"EmployeeCompany":"abd",
"EmployeeTrade":"dlm",
"EmployeeDept":"std",
"Movement":"0",
“TimeStamp”: “2015-05-16T05:50:06”
}
```
#### Response body
N.A.




Note :
Kindly run commands same order 
Kindly run API server first

