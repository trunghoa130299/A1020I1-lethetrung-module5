package vn.vku.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vn.vku.entity.Promotion;

@Repository
public interface PromotionRepository extends JpaRepository<Promotion,Integer> {
}
