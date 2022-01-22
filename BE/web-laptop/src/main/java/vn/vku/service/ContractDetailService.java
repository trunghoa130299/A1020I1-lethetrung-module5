package vn.vku.service;

import vn.vku.entity.ContractDetail;

import java.util.List;

public interface ContractDetailService {
    void save(ContractDetail contractDetail);

    List<ContractDetail> findAll(int id);
}
