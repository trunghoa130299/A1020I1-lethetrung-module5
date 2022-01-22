package vn.vku.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;
import vn.vku.dto.AccountEmployee;
import vn.vku.entity.*;
import vn.vku.service.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin("http://localhost:4200")
@RequestMapping(value = "/employee")
@RestController
public class EmployeeController {

    @Autowired
    EmployeeService employeeService;

    @Autowired
    PositionService positionService;

    @Autowired
    RoleService roleService;

    @Autowired
    AccountRoleService accountRoleService;

    @Autowired
    AccountService accountService;
    

    @RequestMapping(value = "/listPosition", method = RequestMethod.GET)
    public ResponseEntity<List<Position>> getAllPosition() {
        List<Position> positionList = positionService.findAll();
        if (positionList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(positionList, HttpStatus.OK);
    }
    @RequestMapping(value = "/listAccount", method = RequestMethod.GET)
    public ResponseEntity<List<Account>> getAll() {
        List<Account> accounts = accountService.findAll();
        if (accounts.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(accounts, HttpStatus.OK);
    }


    @RequestMapping(value = "/listEmployee", method = RequestMethod.GET)
    public ResponseEntity<Page<Employee>> getAllEmployee(@PageableDefault(size = 5) Pageable pageable) {
        Page<Employee> employeeList = employeeService.getAllEmployee(pageable);
        if (employeeList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(employeeList, HttpStatus.OK);
    }

    @RequestMapping(value = "/deleteEmployee/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Employee> deleteEmployee(@PathVariable("id") String id) {
        Employee employee = employeeService.findById(id);
        if (employee == null) {
            return new ResponseEntity<Employee>(HttpStatus.NOT_FOUND);
        }
        employeeService.deleteEmployee(id);
        return new ResponseEntity<Employee>(HttpStatus.OK);
    }

    @RequestMapping(value = "/createEmployee", method = RequestMethod.POST)
    public ResponseEntity<List<FieldError>> createEmployee(@RequestBody @Valid AccountEmployee accountEmployee, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(bindingResult.getFieldErrors(),
                    HttpStatus.NOT_ACCEPTABLE);
        }
        Account account = new Account(accountEmployee.getUserName(), accountEmployee.getPassword());
        accountService.save(account);
        AccountRoleKey accountRoleKey = new AccountRoleKey(account.getUserName(), 1);
        Role role = roleService.findById(1);
        AccountRole accountRole = new AccountRole(accountRoleKey, account, role);
        accountRoleService.save(accountRole);
        Position position = positionService.findById(accountEmployee.getPositionId());
        String img = accountEmployee.getAvtUrl();
        img = img.substring(12,img.length());
        Employee employee = new Employee(accountEmployee.getIdEmployee(), accountEmployee.getFullName(), accountEmployee.getDateOfBirth(),
                accountEmployee.getEmail(), accountEmployee.getAddress(), accountEmployee.getPhone(),img, account, position);
        employeeService.saveEmployee(employee);
        HttpHeaders headers = new HttpHeaders();
        return new ResponseEntity<>(headers, HttpStatus.CREATED);
    }

    @PutMapping("/updateEmployee/{id}")
    public ResponseEntity<AccountEmployee> updateEmployee(@Valid @RequestBody AccountEmployee accountEmployees,
                                                          BindingResult bindingResult, @PathVariable String id) {
        if(!bindingResult.hasErrors()){
            employeeService.update(accountEmployees, id);
            return new ResponseEntity<>(HttpStatus.OK);
        }else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
    @GetMapping(value = "/viewEmployee/{id}")
    public ResponseEntity<AccountEmployee> detailEmployee(@PathVariable String id) {
        Employee employeeObj = this.employeeService.findById(id);
        if (employeeObj == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        AccountEmployee accountEmployee = new AccountEmployee(employeeObj.getIdEmployee(), employeeObj.getFullName(), employeeObj.getDateOfBirth(),
                employeeObj.getEmail(), employeeObj.getAddress(), employeeObj.getPhone(), employeeObj.getAvtUrl(), employeeObj.getPosition().getPositionId(),
                employeeObj.getAccount().getUserName(), employeeObj.getAccount().getPassword());

        return new ResponseEntity<>(accountEmployee, HttpStatus.OK);
    }
    @RequestMapping(value = "/searchEmployee", method = RequestMethod.GET)
    public ResponseEntity<Page<Employee>> searchEmployee(@RequestParam String nameSearch,
                                                         @RequestParam String typeSearch,
                                                         @PageableDefault(size = 5) Pageable pageable) {
        Page<Employee> employeeList = employeeService.searchEmployee(nameSearch,typeSearch,pageable);
        System.out.println(employeeList);
        if (employeeList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(employeeList,HttpStatus.OK);
    }
    
}
