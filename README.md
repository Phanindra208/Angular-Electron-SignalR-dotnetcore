# Angular-Electron-SignalR-dotnetcore

## Architecture
![alt text](https://github.com/Phanindra208/Angular-Electron-SignalR-dotnetcore/blob/master/Untitled%20Diagram%20(1).jpg)
# Tooling 
   - ##  NodeJS 
   - ##  VSCode 
   - ## Visual Studio 


## Angular Commands 
### Set-Up

`npm install -g @angular/cli`

`cd  \angular-client`

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
| EmployeeName | string | |
| EmployeeCompany | string|  |
| EmployeeTrade | string |   |
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
"TimeStamp": "2015-05-16T05:50:06"
}
```
#### Response body
N.A.




Note :
Kindly run commands same order 
Kindly run API server first

