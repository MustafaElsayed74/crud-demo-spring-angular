import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { PostCustomer } from './components/post-customer/post-customer';
import { GetAllCustomer } from './components/get-all-customer/get-all-customer';
import { UpdateCustomer } from './components/update-customer/update-customer';
import { GetAllCustomers } from './components/get-all-customers/get-all-customers';

@NgModule({
  declarations: [
    App,
    PostCustomer,
    GetAllCustomer,
    UpdateCustomer,
    GetAllCustomers
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
