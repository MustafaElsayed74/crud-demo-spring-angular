import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../services/customer-service';

@Component({
  selector: 'app-update-customer',
  standalone: false,
  templateUrl: './update-customer.html',
  styleUrl: './update-customer.css',
})
export class UpdateCustomer {
  updateCustomerForm!: FormGroup;

  constructor(private customerService: CustomerService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.updateCustomerForm = this.fb.group({
      name: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],

    })
  }

  updateCustomer() { }
}

