package vn.vku.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.vku.entity.ContractDetail;
import vn.vku.repository.ContractDetailRepository;
import vn.vku.service.ContractDetailService;

import java.util.List;

@Service
public class ContractDetailServiceImpl implements ContractDetailService {

    @Autowired
    ContractDetailRepository contractDetailRepository;
    @Override
    public void save(ContractDetail contractDetail) {
        this.contractDetailRepository.save(contractDetail);
    }

    @Override
    public List<ContractDetail> findAll(int id) {
        return this.contractDetailRepository.findByMaHD(id);
    }
}
