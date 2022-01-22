package vn.vku.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vn.vku.entity.Account;
import vn.vku.entity.AccountRole;
import vn.vku.entity.AccountRoleKey;

import java.util.List;

@Repository
public interface AccountRoleRepository extends JpaRepository<AccountRole, AccountRoleKey> {
    List<AccountRole> findAllByAccount(Account account);
}
