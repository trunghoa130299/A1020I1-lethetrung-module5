package vn.vku.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Set;

@Entity
public class Account {
    @Id
    @NotBlank
    private String userName;
    @Column(length = 255)
    private String password;

    @OneToOne(mappedBy = "account" ,cascade = CascadeType.ALL)
    @JsonBackReference
    private Customer customer;

    @OneToOne(mappedBy = "account" ,cascade = CascadeType.ALL)
    @JsonBackReference
    private Employee employee;

    @OneToMany(mappedBy = "account", cascade = CascadeType.ALL)
    @JsonIgnore
    Set<AccountRole> accountRoles;

    public Account() {
    }

    public Account(@NotBlank String userName, String password) {
        this.userName = userName;
        this.password = password;
    }

    public Account(@NotBlank String userName, String password, Customer customer, Employee employee, Set<AccountRole> accountRoles) {
        this.userName = userName;
        this.password = password;
        this.customer = customer;
        this.employee = employee;
        this.accountRoles = accountRoles;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    public Set<AccountRole> getAccountRoles() {
        return accountRoles;
    }

    public void setAccountRoles(Set<AccountRole> accountRoles) {
        this.accountRoles = accountRoles;
    }
}