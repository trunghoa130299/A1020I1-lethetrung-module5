package vn.vku.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vn.vku.entity.ProductType;

@Repository
public interface ProductTypeRepository extends JpaRepository<ProductType,Integer> {
}
