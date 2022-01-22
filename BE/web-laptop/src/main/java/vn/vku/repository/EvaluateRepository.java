package vn.vku.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vn.vku.entity.Evaluate;

@Repository
public interface EvaluateRepository extends JpaRepository<Evaluate, Integer> {
}
