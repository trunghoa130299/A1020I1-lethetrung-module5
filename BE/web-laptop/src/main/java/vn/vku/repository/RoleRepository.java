package vn.vku.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vn.vku.entity.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role,Integer> {
}
