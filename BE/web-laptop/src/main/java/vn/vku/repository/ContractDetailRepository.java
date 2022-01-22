package vn.vku.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import vn.vku.entity.BillProductKey;
import vn.vku.entity.ContractDetail;

import java.util.List;

@Repository
public interface ContractDetailRepository extends JpaRepository<ContractDetail, BillProductKey> {
    @Query("select c from ContractDetail c where c.bill.idBill =:id")
    List<ContractDetail> findByMaHD(@Param("id") int id);
}
