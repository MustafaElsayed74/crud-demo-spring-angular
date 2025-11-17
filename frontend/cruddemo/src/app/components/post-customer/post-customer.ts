import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-customer',
  standalone: false,
  templateUrl: './post-customer.html',
  styleUrl: './post-customer.css',
})
export class PostCustomer {

  postCustomerForm!: FormGroup;

  constructor(private customerService: CustomerService,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.postCustomerForm = this.fb.group({
      name: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      address: [null, [Validators.required]],

    })
  }

  postCustomer() {
    console.log(this.postCustomerForm.value);
    this.customerService.postCustomer(this.postCustomerForm.value).subscribe(result => {
      console.log(result);
      this.router.navigate(['/']);

    })

  }
}
