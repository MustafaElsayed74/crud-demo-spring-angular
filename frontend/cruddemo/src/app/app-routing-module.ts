import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostCustomer } from './components/post-customer/post-customer';
import { GetAllCustomers } from './components/get-all-customers/get-all-customers';
import { UpdateCustomer } from './components/update-customer/update-customer';

const routes: Routes = [
  { path: '', component: GetAllCustomers },
  { path: 'customer', component: PostCustomer },
  { path: 'customer/:id', component: UpdateCustomer }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
