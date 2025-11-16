package com.learn.cruddemo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.learn.cruddemo.domain.entity.Customer;
import com.learn.cruddemo.repository.CustomerRepository;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CustomerServiceImpl implements CustomerService {
    private final CustomerRepository customerRepository;

    @Override
    public Customer addCustomer(Customer customer) {
        return customerRepository.save(customer);
    }

    @Override
    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }

    @Override
    public Customer getCustomerById(Long id) {
        return customerRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Customer not found"));
    }

    @Override
    public Customer updateCustomer(Customer customer, Long id) {
        Customer updatedCustomer = customerRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Customer not fonud."));

        updatedCustomer.setName(customer.getName());
        updatedCustomer.setEmail(customer.getEmail());
        updatedCustomer.setPhone(customer.getPhone());

        return customerRepository.save(updatedCustomer);

    }

}
