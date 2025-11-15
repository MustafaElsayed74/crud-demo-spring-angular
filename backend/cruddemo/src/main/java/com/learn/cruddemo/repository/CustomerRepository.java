package com.learn.cruddemo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.learn.cruddemo.domain.entity.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {

}
