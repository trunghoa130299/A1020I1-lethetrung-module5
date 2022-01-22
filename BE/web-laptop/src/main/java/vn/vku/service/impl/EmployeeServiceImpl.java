package vn.vku.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import vn.vku.dto.AccountEmployee;
import vn.vku.entity.Account;
import vn.vku.entity.Employee;
import vn.vku.entity.Position;
import vn.vku.repository.AccountRepository;
import vn.vku.repository.EmployeeRepository;
import vn.vku.repository.PositionRepository;
import vn.vku.service.EmployeeService;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    EmployeeRepository employeeRepository;

    @Autowired
    AccountRepository accountRepository;

    @Autowired
    PositionRepository positionRepository;

    @Override
    public Page<Employee> getAllEmployee(Pageable pageable) {
        return employeeRepository.findAll(pageable);
    }

    @Override
    public Employee findById(String id) {
        return employeeRepository.findById(id).orElse(null);
    }

    @Override
    public void deleteEmployee(String id) {
        employeeRepository.deleteById(id);
    }

    @Override
    public void update(AccountEmployee accountEmployee, String id) {
        Employee employee = employeeRepository.findById(id).orElse(null);
        Account account = accountRepository.findByUserName(accountEmployee.getUserName());
        Position position = positionRepository.findById(accountEmployee.getPositionId()).orElse(null);
        if (employee != null && account != null) {
            employee.setAccount(account);
            employee.setPosition(position);
            employee.setDateOfBirth(accountEmployee.getDateOfBirth());
            employee.setPhone(accountEmployee.getPhone());
            employee.setAvtUrl(accountEmployee.getAvtUrl());
            employee.setEmail(accountEmployee.getEmail());
            employee.setAddress(accountEmployee.getAddress());
            employee.setFullName(accountEmployee.getFullName());
            position.setPositionId(accountEmployee.getPositionId());
            account.setPassword(accountEmployee.getPassword());
            employeeRepository.save(employee);
        }
    }

    @Override
    public void saveEmployee(Employee employee) {
        employeeRepository.save(employee);
    }

    @Override
    public Page<Employee> searchEmployee(String nameSearch, String typeSearch, Pageable pageable) {
        return this.employeeRepository.searchEmployee(nameSearch,typeSearch,pageable);
    }

}
