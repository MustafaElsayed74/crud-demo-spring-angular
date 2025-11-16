import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer-service';
import Swal from 'sweetalert2';

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


  deleteCustomer(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "This action cannot be undone",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.customerService.deleteCustomer(id).subscribe(() => {
          Swal.fire('Deleted!', 'Customer has been removed.', 'success');
          this.getAllCustomers();
        });
      }
    });
  }



}
