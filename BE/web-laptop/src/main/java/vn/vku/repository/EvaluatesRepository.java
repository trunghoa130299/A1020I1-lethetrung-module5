package vn.vku.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import vn.vku.entity.EvaluateKey;
import vn.vku.entity.Evaluates;

import java.util.List;

@Repository
public interface EvaluatesRepository extends JpaRepository<Evaluates,EvaluateKey> {
    @Query("select e from Evaluates e where e.product.idProduct =:id")
    List<Evaluates> findByIdPro(@Param("id") int id);
}
