import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer-service';

@Component({
  selector: 'app-get-all-customers',
  standalone: false,
  templateUrl: './get-all-customers.html',
  styleUrl: './get-all-customers.css',
})
export class GetAllCustomers {

  customers!: any[];
  searchText: string = '';

  constructor(private customerService: CustomerService) {

  }



  ngOnInit() {
    this.getAllCustomers();
  }

  getAllCustomers() {
    this.customerService.getAllCustomers().subscribe(result => {
      console.log(result);

      this.customers = result;
    });
  }

  editCustomer(c: any) {

  }

  deleteCustomer(c: any) {

  }



}
