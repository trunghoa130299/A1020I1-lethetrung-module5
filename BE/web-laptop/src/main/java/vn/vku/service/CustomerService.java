package vn.vku.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import vn.vku.entity.Customer;

public interface CustomerService {
    Page<Customer> getAllCustomer(Pageable pageable);

    Customer findById(String id);

    void deleteCustomer(String id);

    Page<Customer> searchCustomer(String name, Pageable pageable);

    void saveCustomer(Customer customer);

    Customer findByUser(String id);
}
