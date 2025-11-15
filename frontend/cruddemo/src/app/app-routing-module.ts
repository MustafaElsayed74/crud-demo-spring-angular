import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostCustomer } from './components/post-customer/post-customer';
import { GetAllCustomers } from './components/get-all-customers/get-all-customers';

const routes: Routes = [
  { path: 'customer', component: PostCustomer },
  { path: '', component: GetAllCustomers },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
