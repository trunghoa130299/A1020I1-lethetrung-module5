package vn.vku.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vn.vku.entity.Account;

import java.util.Optional;

@Repository
public interface AccountRepository extends JpaRepository<Account, String> {
    Account findAccountByUserName(String userName);

    Account findByUserName(String username);
}
