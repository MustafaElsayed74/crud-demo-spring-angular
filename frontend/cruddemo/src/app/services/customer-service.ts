import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:9000'

@Injectable({
  providedIn: 'root',
})
export class CustomerService {

  constructor(private http: HttpClient) {

  }


  postCustomer(customer: any): Observable<any> {
    return this.http.post(BASE_URL + '/api/customers', customer);
  }

  getAllCustomers(): Observable<any> {
    return this.http.get(BASE_URL + '/api/customers');
  }


  getCustomerById(id: number): Observable<any> {
    return this.http.get(BASE_URL + `/api/customers/${id}`);
  }
}
