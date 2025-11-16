import { Component, resource } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../services/customer-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-customer',
  standalone: false,
  templateUrl: './update-customer.html',
  styleUrl: './update-customer.css',
})
export class UpdateCustomer {

  updateCustomerForm!: FormGroup;
  id: number;

  constructor(private customerService: CustomerService,
    private fb: FormBuilder,
    private activateRoute: ActivatedRoute
  ) {
    this.id = this.activateRoute.snapshot.params['id'];
  }



  ngOnInit() {
    this.updateCustomerForm = this.fb.group({
      name: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],

    })
    this.getCustomerById(this.id)
  }


  getCustomerById(id: number) {
    this.customerService.getCustomerById(id).subscribe(result => {
      this.updateCustomerForm.patchValue(result);
    })
  }

  updateCustomer() { }
}

