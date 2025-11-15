package com.learn.cruddemo.service;

import org.springframework.stereotype.Service;

import com.learn.cruddemo.domain.entity.Customer;
import com.learn.cruddemo.repository.CustomerRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CustomerServiceImpl implements CustomerService {
    private final CustomerRepository customerRepository;

    @Override
    public Customer addCustomer(Customer customer) {
        return customerRepository.save(customer);
    }
}
