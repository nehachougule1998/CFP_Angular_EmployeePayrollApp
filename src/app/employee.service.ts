import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // injected HttpClient to perform Http request
  constructor(private http:HttpClient) { }

     
    // this method is used to request the POST http method.
    // it save the employee data in the database.
    // @returns the response message of the POST method
   
  insertEmployee(employee: any) {
    return this.http.post("http://localhost:8080/emp/add", employee);
  }

    // this method is used to request the GET http method.
    // it save the employee data in the database.
    // @returns the response message of the GET method

  getEmployee() {
    return this.http.get("http://localhost:8080/emp/get");
  }

  //Used HttpClient class to perform Http request to get data 
  // from the database for particular Id on given url

  getEmployeeById(Id: number) {
    return this.http.get("http://localhost:8080/emp/get/"+Id);
  }

  //Used HttpClient class  to perform Http request to update data in database on given url
  updateEmployeeById(employee: any,Id: number) {
    return this.http.put("http://localhost:8080/emp/edit/"+Id, employee);
  }
   
   
    // DELETE request method to hit the HTTP server
    // employee_id for which the delete action needs to be taken.
    // @returns the delete request response.
   
  deleteById(employeeId:number): Observable<any> {
    return this.http.delete("http://localhost:8080/emp/remove/"+employeeId);
  }
}
