package vn.vku.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.vku.entity.Oder;
import vn.vku.repository.OderRepository;
import vn.vku.service.OderService;

import java.util.List;

@Service
public class OderServiceImpl implements OderService {
    @Autowired
    OderRepository oderRepository;

    @Override
    public List<Oder> findAll() {
        return this.oderRepository.findAll();
    }
}
