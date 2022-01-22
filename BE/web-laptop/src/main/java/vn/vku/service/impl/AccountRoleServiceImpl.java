package vn.vku.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.vku.entity.AccountRole;
import vn.vku.repository.AccountRoleRepository;
import vn.vku.service.AccountRoleService;

@Service
public class AccountRoleServiceImpl implements AccountRoleService {
    @Autowired
    AccountRoleRepository accountRoleRepository;

    @Override
    public void save(AccountRole accountRole) {
        accountRoleRepository.save(accountRole);
    }
}
