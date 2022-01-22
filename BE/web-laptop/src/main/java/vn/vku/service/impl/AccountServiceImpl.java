package vn.vku.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.vku.entity.Account;
import vn.vku.repository.AccountRepository;
import vn.vku.service.AccountService;

import java.util.List;

@Service
public class AccountServiceImpl implements AccountService {
    @Autowired
    AccountRepository accountRepository;

    @Override
    public void save(Account account) {
        accountRepository.save(account);
    }

    @Override
    public Account findById(String userName) {
        return this.accountRepository.findById(userName).orElse(null);
    }

    @Override
    public List<Account> findAll() {
        return this.accountRepository.findAll();
    }
}
