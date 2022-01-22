package vn.vku.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vn.vku.entity.Oder;

@Repository
public interface OderRepository extends JpaRepository<Oder,Integer> {

}
