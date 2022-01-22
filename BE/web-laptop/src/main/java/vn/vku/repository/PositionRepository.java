package vn.vku.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import vn.vku.entity.Position;

public interface PositionRepository extends JpaRepository<Position,Integer> {
}
