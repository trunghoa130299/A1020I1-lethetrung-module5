package vn.vku.service;

import vn.vku.entity.Account;

import java.util.List;

public interface AccountService {
    void save(Account account);

    Account findById(String userName);

    List<Account> findAll();
}
