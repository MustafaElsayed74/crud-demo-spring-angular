package com.learn.cruddemo.service;

import java.util.List;
import java.util.Optional;

import com.learn.cruddemo.domain.entity.Customer;

public interface CustomerService {

    Customer addCustomer(Customer customer);

    List<Customer> getAllCustomers();

    Customer getCustomerById(Long id);

    Customer updateCustomer(Customer customer, Long id);

    void deleteCustomer(Long id);

}
